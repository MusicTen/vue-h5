<template>
    <div class="list" :style="'min-height: '+ bodyHeight + 'px'">
        <Header :isShow="!1"></Header>
        <div class="content">
            <transition-group class="ul" tag="ul">
                <li v-for="(item, index) in datas" :key="item.time">
                    <div class="img"><img :src="item.img" alt=""></div>
                    <div class="center">
                        <p>{{item.time}}</p>
                        <p>{{item.event}}</p>
                        <p>{{item.place}}</p>
                    </div>
                    <circle-progress
                        class="progress"
                        ref="$circle"
                        :id="index"
                        :progress="item.progress"
                        :barColor="(item.progress > 35 ? (item.progress > 65 ? barColor[2] : barColor[1]) : barColor[0])"
                        :backgroundColor="item.progress > 35 ? (item.progress > 65 ? backgroundColor[2] : backgroundColor[1]) : backgroundColor[0]"
                        >
                    </circle-progress>
                </li>
            </transition-group>
            <div class="add" @click="add">＋</div>
        </div>
        <Footer :index="1"></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CircleProgress from '@/components/content/circle-progress'

export default {
    components: {
        Header,
        Footer,
        CircleProgress
    },
    data() {
        return {
            bodyHeight: this.$store.state.windowHeight - 100,
            show: true,
            progress: 50,
            imgs: [
                require('../assets/plan/1.png'),
                require('../assets/plan/2.png'),
                require('../assets/plan/3.png'),
                require('../assets/plan/4.png'),
                require('../assets/plan/5.png'),
                require('../assets/plan/6.png'),
                require('../assets/plan/7.png'),
                require('../assets/plan/8.png')
            ],
            barColor: ['#73d011', '#F2AE57', '#ba1a1a'],
            backgroundColor: ['#c3daaa', '#FFE8CC', '#dcb0b0'],
            datas: [
                {
                    img: require('../assets/plan/1.png'),
                    progress: 30,
                    time: 'PM 13:00',
                    event: '冲浪',
                    place: '三亚'
                },
                {
                    img: require('../assets/plan/2.png'),
                    progress: 70,
                    time: 'AM 08:00',
                    event: '海钓',
                    place: '钓鱼岛'
                },
                {
                    img: require('./../assets/plan/3.png'),
                    progress: 50,
                    time: 'PM 04:00',
                    event: '跳伞',
                    place: '上海'
                },
                {
                    img: require('./../assets/plan/4.png'),
                    progress: 10,
                    time: 'AM 09:30',
                    event: '聚餐',
                    place: '青岛'
                },
                {
                    img: require('./../assets/plan/5.png'),
                    progress: 90,
                    time: 'PM 11:00',
                    event: '泡澡',
                    place: '哈尔滨'
                }
            ],
            nextDatas: [
                {
                    img: require('../assets/plan/6.png'),
                    progress: 30,
                    time: 'PM 03:00',
                    event: '日光浴',
                    place: '高雄'
                },
                {
                    img: require('../assets/plan/7.png'),
                    progress: 70,
                    time: 'AM 13:00',
                    event: '登山',
                    place: '玉龙雪山'
                },
                {
                    img: require('../assets/plan/8.png'),
                    progress: 50,
                    time: 'PM 07:00',
                    event: '自驾游',
                    place: '三峡'
                }
            ]
        }
    },
    methods: {
        add () {
            let index = Math.round(Math.random() * 8)
            this.datas.unshift({
                img: require(`../assets/plan/${index}.png`),
                progress: index * 10,
                time: `PM 1${index}:00`,
                event: '自驾游',
                place: '三峡'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .list {
        width: 100%;
        height: 100%;
        background: linear-gradient(to left bottom, #96cdc7, #e8b9dd);
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .content {
        padding: 15px;
        .ul {
            li {
                transition: all 1s;
                box-sizing: border-box;
                width: 100%;
                height: 80px;
                border-radius: 5px;
                margin-bottom: 10px;
                background-color: #fff;
                padding: 10px;
                display: flex;
                .img {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 32px;
                        height: 32px;
                    }
                }
                .center {
                    flex: 3;
                    p:first-child {
                        font-size: 16px;
                        color: #929292;
                        margin-bottom: 6px;
                    }
                    p:nth-child(2) {
                        font-size: 18px;
                        font-weight: 600;
                        color: #565656;
                        margin-bottom: 6px;
                    }
                    p:last-child {
                        font-size: 14px;
                        color: #929292;
                        position: relative;
                        padding-left: 16px;
                        &::before {
                            content: '';
                            background: url('../assets/plan/0.png');
                            width: 16px;
                            height: 16px;
                            position: absolute;
                            top: -2px;
                            left: -1px;
                        }
                    }
                }
                .progress {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        .ul-enter, .ul-leave-to
            /* .ul-leave-active for below version 2.1.8 */ {
            opacity: 0;
            transform: translateX(30px);
        }
        .add {
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            background-color: pink;
            font-size: 58px;
            color: #fff;
            border-radius: 50%;
            position: fixed;
            bottom: 70px;
            right: 20px;
        }
    }
</style>