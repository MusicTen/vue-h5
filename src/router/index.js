import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index' // '@/'--相对路径(简写)
import home from '@/pages/home'
import list from '@/pages/list'
import news from '@/pages/news'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', // 到时候地址栏会显示的路径
            name: 'index',
            component: index // index是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/list',
            name: 'list',
            component: list
        },
        {
            path: '/news',
            name: 'news',
            component: news
        }
    ],
    mode: "history" // 干掉地址栏里边的#号键
})
