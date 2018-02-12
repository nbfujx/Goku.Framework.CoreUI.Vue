<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card :header="caption">

          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
        name: 'sysmoduleadd',
        data() {
          return {
            caption:'<strong><i class="fa fa-align-justify"></i></strong> 模块修改',
          }
        },
        methods: {},
        mounted() {}
    }
</script>

<style>

</style>
