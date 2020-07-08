import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/home')
    },
    {
      path: '/profile',
      component: () => import('@/components/profile')
    }
  ]
})
