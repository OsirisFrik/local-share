import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '../layouts/main.vue'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [{
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'Home'
        }
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
