<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col>
                <button v-on:click="addModule()" class="layui-btn layui-btn-sm"><i class="icon-plus" ></i>新增</button>
                <button v-on:click="editModule()" class="layui-btn layui-btn-sm"><i class="icon-plus" ></i>修改</button>
                <button v-on:click="deleteModule()" class="layui-btn layui-btn-sm layui-btn-danger"><i class="icon-close"></i>删除</button>
              </b-col>
            </b-row>
            <table class="layui-table table-responsive-sm" id="table" lay-filter="table"></table>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
  </div>
</template>

<script>
  /* eslint-disable*/
  export default {
        name: 'sysmodule',
        data(){
          return {
            caption:'<strong><i class="fa fa-align-justify"></i></strong> 模块列表',
            dic_ifShow:[{"0":"否","1":"是"	}]
          }
        },
        methods: {
          tableInit() {
            var dic_ifShow=this.dic_ifShow[0];
            layui.use('table', function() {
              var table = layui.table, $ = layui.jquery;
              var opt = {
                elem: '#table'
                , url: '/api/sysModule/getModuleForPaging'
                , height: 410
                , page: false //开启分页,
                , cols: [[
                  {type: 'checkbox'}
                  , {field: 'name', width: 150, title: '模块名称'}
                  , {field: 'indexPage', width: 150, title: '模块首页'}
                  , {field: 'ifShow', width: 100, title: '是否展示', templet: function(d){
                        for (var key in dic_ifShow) {
                          if (key == d.ifShow) {
                               return dic_ifShow[key];
                             }
                           }
                      }
                  }
                  , {field: 'sort', width: 100, title: '排列序号'}
                  , {field: 'description', width: 250, title: '模块描述'}
                ]],
                response: {
                  countName: 'total', //数据总数的字段名称，默认：count
                  dataName: 'rows' //数据列表的字段名称，默认：data
                }
              };
              table.render(opt);
            })
          }
        },
        mounted() {
          this.tableInit()
       }
    }
</script>

<style>

</style>
