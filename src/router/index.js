import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '@/components/Home'
import Stateless from '@/components/Stateless'
import StatelessStore from '@/components/StatelessStore'
import PersistentStore from '@/components/PersistentStore'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stateless',
      name: 'Stateless',
      component: Stateless
    },
    {
      path: '/stateless-store',
      name: 'Stateless-Store',
      component: StatelessStore
    },
    {
      path: '/persistent-store',
      name: 'Persistent-Store',
      component: PersistentStore
    }
  ]
})
