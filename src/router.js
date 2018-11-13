import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'grid',
      component: () => import(/* webpackChunkName: "GridView" */ './views/GridView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "AddItem" */ './views/AddItem.vue')
    },
    {
      path: '/view',
      name: 'view',
      component: () => import(/* webpackChunkName: "AddItem" */ './views/PetView.vue')
    }
  ]
})
