import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from '@/views/Home.vue' // '@/'--相对路径(简写)
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 干掉地址栏里边的#号键
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
