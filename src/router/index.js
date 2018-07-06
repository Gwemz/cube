import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import button from '@/components/button'
import loading from '@/components/loading'
import tip from '@/components/tip'
import toolbar from '@/components/toolbar'
import tabbar from '@/components/tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/tip',
      name: 'tip',
      component: tip
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: toolbar
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar
    }
  ]
})
