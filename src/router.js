import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import News from '@/views/News.vue' // '@/'--相对路径(简写)
import List from './views/List.vue'
import Search from './views/Search.vue'
import NoFind from './views/NoFind.vue'
import NavigatorList from './views/NavigatorList.vue'
import Timeline from './views/Timeline.vue'
import SlideRender from './components/content/BScroll/GoodsListRender.vue'
import FormListRender from './components/content/BScroll/GoodsListRender.vue'
import SimpleScrollDemo from './components/content/BScroll/GoodsListRender.vue'
import GoodListRender from './components/content/BScroll/GoodsListRender.vue'
import PickerRender from './components/content/BScroll/GoodsListRender.vue'

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
      component: News,
      children: [
        {
          path: '1',
          component: SlideRender
        },
        {
          path: '2',
          component: FormListRender
        },
        {
          path: '3',
          component: SimpleScrollDemo
        },
        {
          path: '4',
          component: GoodListRender
        },
        {
          path: '5',
          component: PickerRender
        },
        {
          path: '*',
          component: NoFind
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      // 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，
      // 造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，
      // 即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，
      // 需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时
      // 在访问该路由时，按需加载
      component: () => import('./views/Home.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      name: 'nofind',
      component: NoFind
    },
    {
      path: '/navs',
      name: 'navs',
      component: NavigatorList
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/credit',
      name: 'credit',
      component: () => import('./views/Credit.vue')
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('./views/Circle.vue')
    },
    {
      path: '/csstricks',
      name: 'csstricks',
      component: () => import('./views/CssTricks.vue')
    }
  ]
})
