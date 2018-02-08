<template>
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">
            <b-row>
              <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="用户名" class="search-content">
                    <b-form-input type="text" class="search-content"></b-form-input>
                  </b-input-group>
                </b-form-fieldset>
               </b-col>
               <b-col cols="3">
                <b-form-fieldset>
                  <b-input-group left="操作日期" class="search-content">
                    <b-form-input type="text" class="layui-input search-content" id="createdate" placeholder=" - "></b-form-input>
                  </b-input-group>
                </b-form-fieldset>
              </b-col>
              <b-col cols="3">
                <button class="layui-btn layui-btn-normal layui-btn-sm"><i class="icon-magnifier"></i>查询</button>
                <button class="layui-btn layui-btn-primary layui-btn-sm"><i class="icon-refresh"></i>重置</button>
              </b-col>
            </b-row>
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
        caption:'<strong><i class="fa fa-align-justify"></i></strong> 日志列表'
      }
    },
    methods: {
      layuiInit() {
        layui.use('laydate', function() {
          var laydate = layui.laydate;

          laydate.render({
            elem: '#createdate'
            ,range: true
          });
        })
      }
    },
    mounted() {
      this.layuiInit()
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
