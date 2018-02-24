<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row style="margin-bottom: 10px">
              <b-col cols="3">
                <Table highlight-row border ref="module" :columns="modulecolumns" :data="moduledata" :size="small" @on-current-change="changeMenu"></Table>
              </b-col>
              <b-col cols="9">
                <b-row style="margin-bottom: 10px">
                  <b-col>
                    <Button @click="addModule()" type="success" icon="plus" class="opreate-btn" >新增</Button>
                    <!--  <Button @click="editModule()" type="success" icon="plus" class="opreate-btn">修改</Button>
                      <Button @click="deleteModule()" type="error"    icon="close" class="opreate-btn">删除</Button>-->
                    </b-col>
                  </b-row>
                  <zk-table
                    ref="menu"
                    index-text="#"
                    :data="menudata"
                    :columns="menucolumn"
                    :border="props.border"
                    :tree-type="props.treeType"
                    :is-fold="props.isFold"
                    :expand-type="props.expandType"
                    :selection-type="props.selectionType">
                    <template slot="icon" scope="scope">
                      <i v-bind:class="scope.row.icon"></i>
                    </template>
                    <template slot="ifShow" scope="scope">
                      <span v-if="scope.row.ifShow==='0'">不展示</span>
                      <span v-else>展示</span>
                    </template>
                  </zk-table>
                </b-col>
              </b-row>
            </b-card>
          </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'sysmenu',
    data() {
      return {
        caption:'<strong><i class="fa fa-align-justify"></i></strong> '+ this.$route.name,
        modulecolumns: [
          {
            title: '模块名称',
            key: 'name'
          }
        ],
        moduledata:[],
        menudata:[],
        menucolumn: [
          {
            label: '菜单名称',
            prop: 'label',
            width: "140px"
          },
          {
            label: '菜单图标',
            prop: 'icon',
            template: 'icon',
            width: "80px",
            type: 'template'
          },
          {
            label: '菜单描述',
            prop: 'description',
            width: "160px"
          },
          {
            label: '是否展示',
            prop: 'ifShow',
            template: 'ifShow',
            width: "80px",
            type: 'template'
          },
          {
            label: '业务权限',
            prop: 'permission',
          },
          {
            label: '访问路径',
            prop: 'url',
          },
          {
            label: '操作',
            prop: '',
            width: "120px"
          }
        ],
        props: {
          border: true,
          treeType: true,
          isFold: false,
          selectionType: false,
          expandType: false,
        },
        selectModuleid:''
      }
    },
    methods: {
      getTableData(){
        this.$http.get('api/sysModule/getModuleForPaging')
          .then((response) => {
            this.moduledata=response.data.rows;
            this.selectModuleid=response.data.rows[0].id;
            this.getTreeData();
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getTreeData(){
        this.$http.get('api/sysMenu/getMenuForTree',{
          params: {
            moduleId: this.selectModuleid
          }
        }).then((response) => {
            this.menudata=response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      changeMenu(currentRow, oldCurrentRow){
        this.selectModuleid=currentRow.id;
        this.getTreeData();
      },
      addModule(){},
      editModule(){
        var checked=this.$refs.menu.getCheckedProp("id");
        this.$layer.alert(checked)
      },
      deleteModule(){
        var checked=this.$refs.menu.getCheckedProp("id");
        this.$layer.alert(checked)
      }
    },
    mounted() {
      this.getTableData()
    }
  }
</script>

<style scoped>

</style>
