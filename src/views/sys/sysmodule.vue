<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row style="margin-bottom: 10px">
              <b-col>
                <Button @click="addModule()" type="success" icon="plus" class="opreate-btn" >新增</Button>
                <Button @click="editModule()" type="success" icon="plus" class="opreate-btn">修改</Button>
                <Button @click="deleteModule()" type="error"    icon="close" class="opreate-btn">删除</Button>
              </b-col>
            </b-row>
            <Table border ref="selection" :columns="columns" :data="tabledata" :size="small"></Table>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
  /* eslint-disable*/
  export default {
        name: 'sysmodule',
        data(){
          return {
            caption:'<strong><i class="fa fa-align-justify"></i></strong> '+ this.$route.name,
            dic_ifShow:{"0":"否","1":"是"	},
            columns: [
              {
                type: 'selection',
                width: 60,
                align: 'center'
              },
              {
                title: '模块名称',
                key: 'name',
                width:150
              },
              {
                title: '模块首页',
                key: 'indexPage',
                width:150
              },
              {
                title: '是否展示',
                key: 'ifShow',
                width:150,
                render: (h, params)=>{
                  for (var key in this.dic_ifShow) {
                    if (key == params.row.ifShow) {
                      return this.dic_ifShow[key];
                    }
                  }
                }
              },
              {
                title: '排列序号',
                key: 'sort',
                width:150
              },
              {
                title: '模块描述',
                key: 'description',
                ellipsis:true
              }
            ],
            tabledata:[]
          }
        },
        methods: {
          getTableData(){
            this.$http.get('api/sysModule/getModuleForPaging')
              .then((response) => {
                console.log(response.data);
                this.tabledata=response.data.rows;
              })
              .catch((error) => {
                console.log(error);
              });
          },
          addModule(){
            this.$router.push({ path: '/sys/system/sysmodule/add' })
          },
          editModule(){
            this.$layer.alert(this.$refs.selection.getSelection())
          },
          deleteModule(){
            this.$layer.alert(this.$refs.selection.getSelection())
          }
        },
        mounted() {
            this.getTableData()
       }
    }
</script>

<style>
  .opreate-btn
  {
    margin:0 0 10px 15px;
  }
</style>
