import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from '@/views/Home.vue' // '@/'--相对路径(简写)
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 干掉地址栏里边的#号键
  // 需要注意的是，当我们启用 history 模式的时候，
  // 由于我们的项目是一个单页面应用，所以在路由跳转的时候，
  // 就会出现访问不到静态资源而出现 404 的情况，
  // 这时候就需要服务端增加一个覆盖所有情况的候选资源：
  // 如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (news.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'list',
      component: List
    },
  ]
})
