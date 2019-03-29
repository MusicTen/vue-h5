<template>
    <div class="footer">
        <div v-for="(item, index) in tabbar" :key="index" :class="currentIndex===index?'active item':'item'" @click="choose(index,item.path)">
            <img :src="currentIndex===index?item.iconActive:item.icon"/><span>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    props: {
        currentIndex: {
            default: 0,
            type: Number,
        }
    },
    data() {
        return {
            tabbar: [
                {
                    title: '首页',
                    path: '/',
                    icon: require('../../assets/tabbar/home2.png'),
                    iconActive: require('../../assets/tabbar/home1.png')
                },
                {
                    title: '列表',
                    path: '/list',
                    icon: require('../../assets/tabbar/list2.png'),
                    iconActive: require('../../assets/tabbar/list1.png')
                },
                {
                    title: '新闻',
                    path: '/news',
                    icon: require('../../assets/tabbar/news2.png'),
                    iconActive: require('../../assets/tabbar/news1.png')
                },
                {
                    title: '个人中心',
                    path: '/home',
                    icon: require('../../assets/tabbar/excel2.png'),
                    iconActive: require('../../assets/tabbar/excel1.png')
                }
            ]
        }
    },
    watch: {
        $route(to) { // 监听路由变化
            // console.log(to.path);
            let currenHash = to.path
            this.currentIndex = this.tabbar.findIndex((value) => value.path == currenHash)
        }
    },
    methods: {
        choose(index, path) {
            // console.log(index, path)
            this.currentIndex = index
            // console.log(this.$router)
            this.$router.push({path: path})
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .footer {
        width: 100%;
        height: 50px;
        border-top: 1px solid #e4e4e4;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex: 4;
        .item {
            width: 25%;
            height: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            text-decoration: none;
            color: #999;
            img {
                width: 24px;
                height: 24px;
            }
        }
        .active {
            color: #f95352;
        }
    }
</style>