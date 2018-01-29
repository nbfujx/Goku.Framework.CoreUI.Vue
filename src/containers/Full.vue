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
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
      },
      {
        title: true,
        name: 'UI elements',
        class: '',
        wrapper: {
          element: '',
          attributes: {}
        }
      },
      {
        name: 'Components',
        url: '/components',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Buttons',
            url: '/components/buttons',
            icon: 'icon-puzzle'
          },
          {
            name: 'Social Buttons',
            url: '/components/social-buttons',
            icon: 'icon-puzzle'
          },
          {
            name: 'Cards',
            url: '/components/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/components/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Modals',
            url: '/components/modals',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/components/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/components/tables',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star'
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator'
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      },
      {
        divider: true
      },
      {
        title: true,
        name: 'Extras'
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/pages/login',
            icon: 'icon-star'
          },
          {
            name: 'Register',
            url: '/pages/register',
            icon: 'icon-star'
          },
          {
            name: 'Error 404',
            url: '/pages/404',
            icon: 'icon-star'
          },
          {
            name: 'Error 500',
            url: '/pages/500',
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
