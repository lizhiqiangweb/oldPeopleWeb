import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: resolve => require(['@/components/facilities'], resolve)
    },
    {
      path: '/medical',
      name: 'medical',
      component: resolve => require(['@/components/medical'], resolve)
    },
    {
      path: '/nurse',
      name: 'nurse',
      component: resolve => require(['@/components/nurse'], resolve)
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: resolve => require(['@/components/insurance'], resolve)
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: resolve => require(['@/components/tourism'], resolve)
    },
    {
      path: '/healthy',
      name: 'healthy',
      component: resolve => require(['@/components/healthy'], resolve)
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: resolve => require(['@/components/shopping'], resolve)
    },
    {
      path: '/homeFindContent',
      name: 'homeFindContent',
      component: resolve => require(['@/components/homeFindContent'], resolve)
    }
  ]
})
