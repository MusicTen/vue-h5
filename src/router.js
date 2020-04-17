import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import News from '@/views/News.vue' // '@/'--相对路径(简写)
import List from '@/views/List.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 干掉地址栏里边的#号键
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
      path: '/news/:type',
      name: 'news',
      component: News
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      // 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，
      // 造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，
      // 即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，
      // 需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时
      // 在访问该路由时，按需加载
      component: () => import('./views/Search.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('./views/Timeline.vue')
    },
    {
      path: '/credit',
      name: 'credit',
      component: () => import('@/views/Credit.vue')
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('@/views/Circle.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/Detail.vue')
    },
    {
      path: '/csstricks',
      name: 'csstricks',
      component: () => import('@/views/CssTricks.vue')
    },
    {
      path: '/pullto',
      name: 'pullto',
      component: () => import('@/views/Pullto.vue')
    },
    {
      path: '/share',
      name: 'share',
      component: () => import('@/views/Share.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/views/Loading.vue')
    },
    {
      path: '/pixi',
      name: 'pixi',
      component: () => import('@/views/Pixi.vue')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: () => import('@/views/Canvas.vue')
    },
    {
      path: '*',
      name: 'nofind',
      component: () => import('@/views/NoFind.vue')
    }
  ]
})
