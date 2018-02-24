import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views - 基础页面
import Page404 from '@/views/Page404'
import Page500 from '@/views/Page500'
import Login from '@/views/Login'
import Register from '@/views/Register'

// Views - 系统管理
import sysIndex from '@/views/sys/sysindex'
import sysLog from '@/views/sys/syslog'
import sysModule from '@/views/sys/sysModule'
import sysModuleAdd from '@/views/sys/sysmoduleadd'
import sysMenu from '@/views/sys/sysmenu'
import sysMenuAdd from '@/views/sys/sysmenuadd'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/sys',
      name: '系统模块',
      component: Full,
      children: [
        {
          path: 'sysindex',
          name: '首页',
          component: sysIndex
        },
        {
          path: 'system',
          redirect: '',
          name: '系统管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'syslog',
              name: '日志管理',
              component: sysLog
            },
            {
              path: 'sysmodule',
              name: '模块管理',
              redirect: '/sys/system/sysmodule/list',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'list',
                  name: '模块列表',
                  component: sysModule
                },
                {
                  path: 'add',
                  name: '模块新增',
                  component: sysModuleAdd
                },
                {
                  path: 'edit',
                  name: '模块修改',
                  component: sysModuleAdd
                }
              ]
            },
            {
              path: 'sysmenu',
              name: '菜单管理',
              redirect: '/sys/system/sysmenu/list',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'list',
                  name: '菜单列表',
                  component: sysMenu
                },
                {
                  path: 'add',
                  name: '菜单新增',
                  component: sysMenuAdd
                },
                {
                  path: 'edit',
                  name: '菜单修改',
                  component: sysMenuAdd
                }
              ]
            }
          ]
        },
        {
          path: 'resource',
          redirect: '',
          name: '资源管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'sysconfig',
              name: '字典管理',
              children: [
                {
                  path: 'add',
                  name: '字典新增'
                }
              ]
            },
            {
              path: 'sysorg',
              name: '组织管理'
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: '/login',
      name: '基础模块',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
