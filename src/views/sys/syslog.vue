<template>
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="用户名" class="search-content">
                    <b-form-input type="text" id="username"  class="search-content"></b-form-input>
                  </b-input-group>
                </b-form-fieldset>
               </b-col>
               <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="操作日期" class="search-content">
                    <b-form-input type="text" class="layui-input search-content" id="createdate"   placeholder=" - "></b-form-input>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <button v-on:click="refreshTable()" class="layui-btn layui-btn-normal layui-btn-sm"><i class="icon-magnifier" id="refreshTable"></i>查询</button>
                <button v-on:click="resetTable()" class="layui-btn layui-btn-primary layui-btn-sm"><i class="icon-refresh" id="resetTable"></i>重置</button>
              </b-col>
            </b-row>
            <table class="layui-table table-responsive-sm" id="table" lay-filter="table"></table>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->

    </div>
</template>

<script>
  import $ from 'jquery'
  /* eslint-disable*/
  export default {
    name: 'syslog',
    data(){
       return {
        caption:'<strong><i class="fa fa-align-justify"></i></strong> 日志列表'
      }
    },
    methods: {
      laydateInit() {
        layui.use('laydate', function(){
          var laydate=layui.laydate;
          //日期范围
          laydate.render({
            elem: '#createdate'
            ,range: true
          });
        })
      },
      tableInit() {
        var daterange=$('#createdate').val().split(' - ');
        var username=$('#username').val();
        layui.use('table', function(){
          var table = layui.table,$ = layui.jquery,
            laydate=layui.laydate;
          var opt={
            elem: '#table'
            ,url:'/api/sysLog/getLogForPaging'
            ,where: {
              username: username,
              begindate:daterange[0],
              enddate:daterange[1]
            }
            ,height: 410
            ,page: true //开启分页,
            ,limit:5
            ,limits:[5,10,20,50]
            ,cols: [[
              {type:'checkbox'}
              ,{field:'username', width:120, title: '用户名'}
              ,{field:'ip', width:150, title: 'ip地址'}
              ,{field:'operation', width:100, title: '操作'}
              ,{field:'method', width:150, title: '访问地址'}
              ,{field:'params', width:400, title: '参数'}
              ,{field:'createDate', width:120, title: '访问日期',templet: function(d){
                    var date =  new Date(d.createDate);
                    var y = 1900+date.getYear();
                    var m = "0"+(date.getMonth()+1);
                    var d = "0"+date.getDate();
                    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
              }}
            ]],
            request: {
              pageName: 'pageNumber', //页码的参数名称，默认：page
              limitName: 'pageSize' //每页数据量的参数名，默认：limit
            },
            response: {
              countName: 'total', //数据总数的字段名称，默认：count
              dataName: 'rows' //数据列表的字段名称，默认：data
            }
          };
          table.render(opt);
        })
      },
      refreshTable(){
        this.tableInit();
      },
      resetTable(){
        $('#username').val("")
        $('#createdate').val("")
        this.tableInit()
      },
    },
    mounted() {
      this.tableInit()
      this.laydateInit()
    }
  }
</script>

<style>
  .search-content
  {
    height:30px;
    margin-bottom: 5px;
  }
  .opreate-btn
  {
    width: 60px;
    margin:0 0 10px 15px;
    text-decoration : none;
  }

</style>
