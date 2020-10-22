import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  // mode: 'history', // 因为是部署到 github pages，使用这个模式去掉了 #，服务器没有配置，页面就会请求不到啦。
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
