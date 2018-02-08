import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import sysIndex from '@/views/sys/sysindex'
import sysLog from '@/views/sys/syslog'

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
              component: sysLog,
              children: [
                {
                  path: 'add',
                  name: '字典新增',
                  component: sysLog
                }
              ]
            },
            {
              path: 'sysorg',
              name: '组织管理',
              component: sysLog
            }
          ]
        }
      ]
    }
  ]
})
