import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        windowWidth: window.screen.width,
        windowHeight: window.screen.height,
        CurrentNavList:[
            {
                id: 1,
                name: '热点'
            },
            {
                id: 2,
                name: '时政'
            },
            {
                id: 3,
                name: '军事'
            },
            {
                id: 4,
                name: '数码'
            },
            {
                id: 5,
                name: '汽车'
            },
            {
                id: 6,
                name: '娱乐'
            },
            {
                id: 7,
                name: '国际'
            },
            {
                id: 8,
                name: '小说'
            },
            {
                id: 9,
                name: '美图'
            },
        ],
        NavList: [
            {
                id: 1,
                name: '热点'
            },
            {
                id: 2,
                name: '时政'
            },
            {
                id: 3,
                name: '军事'
            },
            {
                id: 4,
                name: '数码'
            },
            {
                id: 5,
                name: '汽车'
            },
            {
                id: 6,
                name: '娱乐'
            },
            {
                id: 7,
                name: '国际'
            },
            {
                id: 8,
                name: '小说'
            },
            {
                id: 9,
                name: '美图'
            },
            {
                id: 10,
                name: '文化'
            },
            {
                id: 11,
                name: '历史'
            },
            {
                id: 12,
                name: '家具'
            },
            {
                id: 13,
                name: '育儿'
            },
            {
                id: 14,
                name: '财经'
            },
            {
                id: 15,
                name: '星座'
            },
            {
                id: 16,
                name: '情感'
            },
            {
                id: 17,
                name: '健康'
            },
            {
                id: 18,
                name: '体育'
            },
            {
                id: 19,
                name: '游戏'
            },
            {
                id: 20,
                name: '旅行'
            },
            {
                id: 21,
                name: '美食'
            },
            {
                id: 22,
                name: '上海'
            },
            {
                id: 23,
                name: '房产'
            },
            {
                id: 24,
                name: '时尚'
            },
        ]
    },
    mutations: {

    },
    actions: {

    }
})
