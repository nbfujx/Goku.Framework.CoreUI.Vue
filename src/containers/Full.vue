<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data () {
    return {
      nav: [{
        name: '首页',
        url: '/sys/sysindex',
        icon: 'icon-speedometer'
      },
      {
        title: true,
        name: '系统模块',
        class: '',
        wrapper: {
          element: '',
          attributes: {}
        }
      },
      {
        name: '系统管理',
        url: '/sys/system',
        icon: 'icon-puzzle',
        children: [
          {
            name: '日志管理',
            url: '/sys/system/syslog',
            icon: 'icon-puzzle'
          }]
      },
      {
        name: '资源管理',
        url: '/sys/resource',
        icon: 'icon-star',
        children: [
          {
            name: '字典管理',
            url: '/sys/resource/sysconfig',
            icon: 'icon-star'
          },
          {
            name: '组织管理',
            url: '/sys/resource/sysorg',
            icon: 'icon-star'
          }
        ]
      }]
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
