<template>
      <b-nav-item-dropdown right >
        <template slot="button-content">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>设置</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> 个人信息</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> 系统设置</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-lock"></i> 系统退出</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return { itemsCount: 42 }
    }
  }
</script>

