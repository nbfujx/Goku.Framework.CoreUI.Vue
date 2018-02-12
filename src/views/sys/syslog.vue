<template>
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="用户名" class="search-content">
                    <Input v-model="username" style="width:180px"></Input>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="操作日期" class="search-content">
                    <DatePicker :value="createdate" format="yyyy/MM/dd" type="daterange" class="search-content" placement="bottom-end" placeholder=" - "></DatePicker>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <Button type="primary" icon="ios-search" class="opreate-btn">查询</Button>
                <Button icon="refresh" class="opreate-btn">重置</Button>
              </b-col>
            </b-row>
            <Table border :columns="columns" :data="data" :size="small"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="total" :page-size="5" :page-size-opts="pagesizeopts" show-elevator show-sizer show-total ></Page>
              </div>
            </div>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->

    </div>
</template>

<script>
  /* eslint-disable*/
  export default {
    name: 'syslog',
    data(){
       return {
        caption:'<strong><i class="fa fa-align-justify"></i></strong> 日志列表',
        username:'',
        createdate:[],
        pagesizeopts:[5,10,15,20],
        total:14989,
        columns: [
          {
            title: '用户名',
            key: 'username'
          },
          {
            title: 'ip地址',
            key: 'ip'
          },
          {
            title: '操作',
            key: 'operation'
          },
          {
            title: '访问地址',
            key: 'method'
          },
          {
            title: '参数',
            key: 'params',
            ellipsis:true
          },
          {
            title: '访问日期',
            key: 'createDate',
            render: (h, params)=>{
              var date =  new Date(params.row.createDate);
              var y = 1900+date.getYear();
              var m = "0"+(date.getMonth()+1);
              var d = "0"+date.getDate();
              return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            }
          }
        ],
        data:[{"createDate":1518405159000,"id":"036b596ecde54ae3832671d1c852c562","ip":"115.238.153.230","method":"/sys/log/getListPage","operation":"日志列表","params":"[{}]","username":"admin"},{"createDate":1518405159000,"id":"0ad25e58c60b40e184cbe0837600ccf3","ip":"115.238.153.230","method":"/home","operation":"查看首页","params":"[{\"sysModules\":[{\"description\":\"系统模块\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"sys/index\",\"name\":\"系统模块\",\"sort\":1,\"version\":1},{\"description\":\"BusService模块,webservice服务管理，后续开发功能\",\"id\":\"63b2cf7eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"bus/index\",\"name\":\"BusService模块\",\"sort\":2,\"version\":1},{\"description\":\"博客管理模块，后续开发功能\",\"id\":\"6ad537e2327f421eb90964e1148ededb\",\"ifShow\":\"1\",\"indexPage\":\"blog/index\",\"name\":\"博客模块\",\"sort\":3,\"version\":1},{\"description\":\"\",\"id\":\"01670f963c1f450daf19df1000666bd8\",\"ifShow\":\"1\",\"indexPage\":\"weixin/index\",\"name\":\"微信模块\",\"sort\":3}],\"sysMens\":[{\"description\":\"系统管理\",\"icon\":\"icon-puzzle\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"系统管理\",\"parentId\":\"-1\",\"permission\":\"1212\",\"sort\":1,\"subMenu\":[{\"description\":\"模块管理\",\"icon\":\"icon-clock\",\"id\":\"cab4c933f6d411e78abf0a002700001d\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"模块管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:module:query\",\"sort\":2,\"subMenu\":[],\"url\":\"sys/module/getListPage\"},{\"description\":\"菜单管理\",\"icon\":\"icon-puzzle\",\"id\":\"f287d403efb111e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"菜单管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:menu:query\",\"sort\":3,\"subMenu\":[],\"url\":\"sys/menu/getListPage\"},{\"description\":\"用户管理\",\"icon\":\"icon-puzzle\",\"id\":\"26831a69efb211e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"用户管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:user:query\",\"sort\":4,\"subMenu\":[],\"url\":\"sys/user/getListPage\"},{\"description\":\"日志管理,查看用户操作日志\",\"icon\":\"icon-wrench\",\"id\":\"9d10034226f34e36a23ba2b482af2fa9\",\"ifShow\":\"1\",\"isLeaf\":\"1\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"日志管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:log:query\",\"sort\":4,\"subMenu\":[],\"url\":\"sys/log/getListPage\"},{\"description\":\"\",\"icon\":\"icon-calculator\",\"id\":\"d1422d69c1ec4be4a368f768ae116328\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"权限管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:role:query\",\"sort\":5,\"subMenu\":[],\"url\":\"sys/role/getListPage\"}],\"url\":\"\"}],\"module\":{\"description\":\"系统模块\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"sys/index\",\"name\":\"系统模块\",\"sort\":1,\"version\":1}},\"\"]","username":"admin"},{"createDate":1518405151000,"id":"270ec03d0a7c4e65a4cbd0199c576c5f","ip":"115.238.153.230","method":"/sys/log/getListPage","operation":"日志列表","params":"[{}]","username":"admin"},{"createDate":1518405149000,"id":"ede4e7bc9ab642298916569bff908463","ip":"115.238.153.230","method":"/sys/index","operation":"系统模块首页","params":"[{}]","username":"admin"},{"createDate":1518405148000,"id":"d2b111b39a6442fea9ab17d6875e9951","ip":"115.238.153.230","method":"/home","operation":"查看首页","params":"[{\"sysModules\":[{\"description\":\"系统模块\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"sys/index\",\"name\":\"系统模块\",\"sort\":1,\"version\":1},{\"description\":\"BusService模块,webservice服务管理，后续开发功能\",\"id\":\"63b2cf7eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"bus/index\",\"name\":\"BusService模块\",\"sort\":2,\"version\":1},{\"description\":\"博客管理模块，后续开发功能\",\"id\":\"6ad537e2327f421eb90964e1148ededb\",\"ifShow\":\"1\",\"indexPage\":\"blog/index\",\"name\":\"博客模块\",\"sort\":3,\"version\":1},{\"description\":\"\",\"id\":\"01670f963c1f450daf19df1000666bd8\",\"ifShow\":\"1\",\"indexPage\":\"weixin/index\",\"name\":\"微信模块\",\"sort\":3}],\"sysMens\":[{\"description\":\"系统管理\",\"icon\":\"icon-puzzle\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"系统管理\",\"parentId\":\"-1\",\"permission\":\"1212\",\"sort\":1,\"subMenu\":[{\"description\":\"模块管理\",\"icon\":\"icon-clock\",\"id\":\"cab4c933f6d411e78abf0a002700001d\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"模块管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:module:query\",\"sort\":2,\"subMenu\":[],\"url\":\"sys/module/getListPage\"},{\"description\":\"菜单管理\",\"icon\":\"icon-puzzle\",\"id\":\"f287d403efb111e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"菜单管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:menu:query\",\"sort\":3,\"subMenu\":[],\"url\":\"sys/menu/getListPage\"},{\"description\":\"用户管理\",\"icon\":\"icon-puzzle\",\"id\":\"26831a69efb211e7a2360a0027000038\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"用户管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:user:query\",\"sort\":4,\"subMenu\":[],\"url\":\"sys/user/getListPage\"},{\"description\":\"日志管理,查看用户操作日志\",\"icon\":\"icon-wrench\",\"id\":\"9d10034226f34e36a23ba2b482af2fa9\",\"ifShow\":\"1\",\"isLeaf\":\"1\",\"isparent\":\"0\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"日志管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:log:query\",\"sort\":4,\"subMenu\":[],\"url\":\"sys/log/getListPage\"},{\"description\":\"\",\"icon\":\"icon-calculator\",\"id\":\"d1422d69c1ec4be4a368f768ae116328\",\"ifShow\":\"1\",\"isLeaf\":\"0\",\"isparent\":\"1\",\"moduleId\":\"28c3ef4eefb111e7a2360a0027000038\",\"name\":\"权限管理\",\"parentId\":\"28c3ef4eefb111e7a2360a0027000038\",\"permission\":\"sys:role:query\",\"sort\":5,\"subMenu\":[],\"url\":\"sys/role/getListPage\"}],\"url\":\"\"}],\"module\":{\"description\":\"系统模块\",\"id\":\"28c3ef4eefb111e7a2360a0027000038\",\"ifShow\":\"1\",\"indexPage\":\"sys/index\",\"name\":\"系统模块\",\"sort\":1,\"version\":1}},\"\"]","username":"admin"}]
      }
    },
    methods: {

    },
    mounted() {

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
