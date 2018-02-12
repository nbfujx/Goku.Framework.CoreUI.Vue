<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row style="margin-bottom: 10px">
              <b-col>
                <Button @click="addModule()" type="success" icon="plus" class="opreate-btn">查询</Button>
                <Button @click="editModule()" type="success" icon="plus" class="opreate-btn">重置</Button>
                <Button @click="deleteModule()" type="error"    icon="close" class="opreate-btn">重置</Button>
              </b-col>
            </b-row>
            <Table border ref="selection" :columns="columns" :data="data" :size="small"></Table>
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
            data:[{"description":"系统模块","id":"28c3ef4eefb111e7a2360a0027000038","ifShow":"1","indexPage":"sys/index","name":"系统模块","sort":1,"version":1},{"description":"BusService模块,webservice服务管理，后续开发功能","id":"63b2cf7eefb111e7a2360a0027000038","ifShow":"1","indexPage":"bus/index","name":"BusService模块","sort":2,"version":1},{"description":"","id":"01670f963c1f450daf19df1000666bd8","ifShow":"1","indexPage":"weixin/index","name":"微信模块","sort":3},{"description":"博客管理模块，后续开发功能","id":"6ad537e2327f421eb90964e1148ededb","ifShow":"1","indexPage":"blog/index","name":"博客模块","sort":3,"version":1}]
          }
        },
        methods: {
          addModule(){},
          editModule(){
            console.log(this.$refs.selection.getSelection())
            this.$layer.alert(this.$refs.selection.getSelection())
          },
          deleteModule(){
            console.log(this.$refs.selection.getSelection())
          }
        },
        mounted() {

       }
    }
</script>

<style>
  .opreate-btn
  {
    margin:0 0 10px 15px;
  }
</style>
