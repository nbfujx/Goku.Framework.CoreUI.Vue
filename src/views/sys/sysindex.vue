<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col cols="3">
                <treeselect
                  v-model="value"
                  :multiple="false"
                  :options="source"
                  placeholder="父级菜单"
                  style="width:180px;margin-bottom: 10px"
                />
              </b-col>
              <b-col cols="3">
                  <Button type="primary" @click="refresh()" icon="ios-search" class="width22">查询</Button>
              </b-col>
            </b-row>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
  </div>
</template>

<script>
  /* eslint-disable*/
  import Treeselect from '@riophae/vue-treeselect'
  import "@riophae/vue-treeselect/dist/vue-treeselect.min.css"

  export default {
    name: 'sysindex',
    components: { Treeselect },
    data () {
      return {
        caption: '<strong><i class="fa fa-align-justify"></i></strong> ' + this.$route.name,
        value: null,
        source:[{"children":[{"id":"c536000c524742b0ae1929387515f46d","label":"组织管理"},{"id":"be7187ceefb211e7a2360a0027000038","label":"字典管理"}],"id":"7cfa8d7defb211e7a2360a0027000038","label":"资源管理"},{"children":[{"children":[{"id":"e60ef4d2f75811e78abf0a002700001d","label":"模块新增"},{"id":"514ab49ef75911e78abf0a002700001d","label":"模块修改"},{"id":"70119b90f75911e78abf0a002700001d","label":"模块删除"}],"id":"cab4c933f6d411e78abf0a002700001d","label":"模块管理"},{"children":[{"id":"b7ce7896f5f111e78abf0a002700001d","label":"菜单新增"},{"id":"06fd8633f5f211e78abf0a002700001d","label":"菜单修改"},{"id":"32c15082f5f211e78abf0a002700001d","label":"菜单删除"}],"id":"f287d403efb111e7a2360a0027000038","label":"菜单管理"},{"children":[{"id":"065fa50370284f16add71206e6de8add","label":"菜单赋值"},{"id":"f6a0e61932564c89bdc47d60261c8a85","label":"权限赋值"},{"id":"357ff499f07c11e7a2360a0027000038","label":"用户新增"},{"id":"5ea59df3f07f11e7a2360a0027000038","label":"用户修改"},{"id":"357ff499f07c11e7a2360a0027000030","label":"用户删除"}],"id":"26831a69efb211e7a2360a0027000038","label":"用户管理"},{"id":"9d10034226f34e36a23ba2b482af2fa9","label":"日志管理"},{"children":[{"id":"b4feb81d67954c28820a432b8eb15e83","label":"权限新增"},{"id":"0f9b575a090547afab160b573f593dd4","label":"权限修改"},{"id":"0dfa92bf02ce423da15e0ff7c4d8bc6a","label":"权限删除"},{"id":"cbc0f7eec9434180bede1aabbdacfb1e","label":"权限赋权"}],"id":"d1422d69c1ec4be4a368f768ae116328","label":"权限管理"}],"id":"28c3ef4eefb111e7a2360a0027000038","label":"系统管理"},{"id":"35f6df58f07e11e7a2360a0027000038","label":"首页"}],
      }
    },
    methods: {
      refresh(){

      }
    }
  }
</script>


<style >

</style>

