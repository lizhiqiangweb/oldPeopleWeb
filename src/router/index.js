import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import facilities from '@/components/facilities'
import medical from '@/components/medical'
import nurse from '@/components/nurse'
import insurance from '@/components/insurance'
import tourism from '@/components/tourism'
import healthy from '@/components/healthy'
import shopping from '@/components/shopping'
import homeFindContent from '@/components/homeFindContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/facilities',
      name: 'facilities',
      component: facilities
    },
    {
      path: '/medical',
      name: 'medical',
      component: medical
    },
    {
      path: '/nurse',
      name: 'nurse',
      component: nurse
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: insurance
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: tourism
    },
    {
      path: '/healthy',
      name: 'healthy',
      component: healthy
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/homeFindContent',
      name: 'homeFindContent',
      component: homeFindContent
    }
  ]
})
