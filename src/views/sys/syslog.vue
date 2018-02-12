<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="用户名" class="search-content">
                    <Input v-model="username" clearable style="width:180px"></Input>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="操作日期" class="search-content">
                    <DatePicker v-model="createdate" format="yyyy/MM/dd" type="daterange" class="search-content" placement="bottom-end" placeholder=" - "></DatePicker>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <Button type="primary" @click="refresh()" icon="ios-search" class="opreate-btn">查询</Button>
                <Button @click="reset()" icon="refresh" class="opreate-btn">重置</Button>
              </b-col>
            </b-row>
            <Table border :columns="columns" :data="tabledata" :size="small"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page ref="pages" :total="total" :page-size="5" :page-size-opts="pagesizeopts"
                      show-elevator show-sizer show-total  @on-change="pageChange()" @on-page-size-change="pagesizeChange()"></Page>
              </div>
            </div>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
   <BackTop></BackTop>
  </div>
</template>

<script>
  import {formatDate} from '../../libs/date'
  /* eslint-disable*/
  export default {
    name: 'syslog',
    data(){
       return {
        caption:'<strong><i class="fa fa-align-justify"></i></strong> '+ this.$route.name,
        username:'',
        createdate:[new Date()-7,new Date()],
        pagesizeopts:[5,10,15,20],
        total:0,
        columns: [
          {
            title: '用户名',
            key: 'username',
            width: 100
          },
          {
            title: 'ip地址',
            key: 'ip',
            width: 120
          },
          {
            title: '操作',
            key: 'operation',
            width: 120
          },
          {
            title: '访问地址',
            key: 'method',
            width: 180
          },
          {
            title: '参数',
            key: 'params',
            ellipsis:true
          },
          {
            title: '访问日期',
            key: 'createDate',
            width: 120,
            render: (h, params)=>{
              var date =  new Date(params.row.createDate);
              var y = 1900+date.getYear();
              var m = "0"+(date.getMonth()+1);
              var d = "0"+date.getDate();
              return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            }
          }
        ],
        tabledata:[],
        pageNumber:1,
        pageSize:5
      }
    },
    methods: {
        getTableData(){
          this.$http.get('api/sysLog/getLogForPaging', {
            params: {
              pageNumber: this.pageNumber,
              pageSize:this.pageSize,
              username:this.username,
              begindate:formatDate(this.createdate[0],'yyyy-MM-dd'),
              enddate:formatDate(this.createdate[1],'yyyy-MM-dd')
            }
          })
            .then((response) => {
              console.log(response.data);
              this.tabledata=response.data.rows;
              this.total=response.data.total;
            })
            .catch((error) => {
              console.log(error);
            });
        },
        refresh(){
          this.pageNumber=1
          this.getTableData()
          this.$refs.pages.currentPage=1
        },
        reset(){
        this.username=""
        var enddate=new Date()
        var begindate =new Date()
        begindate.setDate(begindate.getDate() - 7)
        this.createdate=[begindate,enddate]
        this.pageNumber=1
        this.getTableData()
        this.$refs.pages.currentPage=1
      },
        pageChange(){
          this.pageNumber=this.$refs.pages.currentPage
          this.pageSize=this.$refs.pages.currentPageSize
          this.getTableData()
        },
        pagesizeChange(){
          this.pageNumber=1
          this.$refs.pages.currentPage=1
          this.pageSize=this.$refs.pages.currentPageSize
          this.getTableData()
        }
    },
    mounted() {
      var enddate=new Date()
      var begindate =new Date()
      begindate.setDate(begindate.getDate() - 7)
      this.createdate=[begindate,enddate]
      this.getTableData()
    }
  }
</script>

<style>
  .search-content
  {
    height:32px;
    margin-bottom: 5px;
  }
  .opreate-btn
  {
    margin:0 0 10px 15px;
  }

</style>
