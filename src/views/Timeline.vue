<template>
    <div class="timeline">
        <div class="header">
            <h3>cadillac XT4</h3>
            <div :class="['menu', {show:ishsow}]" @click="showAside">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="bgc">
            <div class="left">
                <h4>此刻 正当燃</h4>
                <p>{{time}}</p>
            </div>
            <div class="right">
                <img src="../assets/car/headImg.jpg" alt="">
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item, index) in lists" :key="index" :class="colors[index]">
                    <img :src="item.img" alt="">
                    <div class="title">
                        <h5>{{item.tips}}</h5>
                        <p>{{item.matching}}</p>
                    </div>
                    <span>{{item.price}}</span>
                </li>
            </ul>
        </div>
        <div class="imgs"><img src="../assets/car/plan1.jpg" alt=""></div>
        <transition name="fade">
            <Aside v-if="ishsow"></Aside>
        </transition>
    </div>
</template>
<script>
import Aside from '@/components/content/aside.vue'
export default {
    components: {
        Aside
    },
    data() {
        return {
            ishsow: false,
            colors: ['green', 'purple', 'pink', 'yellow', ''],
            lists: [
                {
                    img: require('../assets/car/plan2.jpg'),
                    tips: '夺目设计 闪耀个性',
                    matching: '28T技术型',
                    price: '¥259700'
                },
                {
                    img: require('../assets/car/plan3.jpg'),
                    tips: '风驰动力 感知竞逐',
                    matching: '28T豪华型',
                    price: '¥279700'
                },
                {
                    img: require('../assets/car/plan4.jpg'),
                    tips: '智趣科技 连接未来',
                    matching: '28T领先型',
                    price: '¥289700'
                },
                {
                    img: require('../assets/car/plan5.jpg'),
                    tips: '全能守护 无忧驾趣',
                    matching: '28T四驱领先运动型',
                    price: '¥314700'
                },
                {
                    img: require('../assets/car/plan2.jpg'),
                    tips: '悦己而燃 青春征程',
                    matching: '28T四驱铂金版',
                    price: '¥352700'
                }
            ]
        }
    },
    computed: {
        time () {
            let time = new Date()
            return time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日'
        }
    },
    methods: {
        showAside () {
            this.ishsow = !this.ishsow
        }
    }
}
</script>
<style lang="scss" scoped>
    .timeline {
        .header {
            width: 100%;
            height: 50px;
            line-height: 50px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 8;
            background-color: #000;
            box-sizing: border-box;
            padding: 0 10px;
            h3 {
                color: #fff;
                font-size: 30px;
                font-family: 'Times New Roman', Times, serif;
                font-style: italic;
            }
            .menu {
                width: 24px;
                height: 18px;
                display: flex;
                position: absolute;
                top: 16px;
                right: 20px;
                z-index: 9;
                flex-direction: column;
                justify-content: space-between;
                span {
                    width: 100%;
                    height: .2em;
                    background-color: #fff;
                    transition: all .7s;
                }
            }
            .show {
                span {
                    background-color: rgb(230, 80, 142);
                }
                span:first-child {
                    transform-origin: left top;
                    transform: rotate(45deg);
                }
                span:nth-child(2) {
                    opacity: 0;
                }
                span:last-child {
                    transform-origin: left bottom;
                    transform: rotate(-45deg);
                }
            }
        }
        .bgc {
            width: 100%;
            height: 260px;
            background: url('../assets/car/plan7.jpg') no-repeat center center;
            background-size: 100% 260px;
            position: relative;
            .left {
                position: absolute;
                bottom: 20px;
                left: 20px;
                color: #979590;
                font-size: 14px;
                h4 {
                    font-size: 20px;
                    line-height: 32px;
                    color: #ddd;
                }
            }
            .right {
                position: absolute;
                bottom: 20px;
                right: 20px;
                img {
                    position: absolute;
                    left: -90px;
                    bottom: -60px;
                    width: 80px;
                    height: 80px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    box-shadow: 0 4px 10px #000; 
                }
                
            }
        }
        .content {
            margin-bottom: 10px;
            ul {
                padding: 0 20px;
                li {
                    display: flex;
                    padding-top: 50px;
                    position: relative;
                    img {
                        width: 100px;
                        height: 70px;
                    }
                    .title {
                        width: 40%;
                        padding: 15px;
                        h5 {
                            font-size: 16px;
                            margin-bottom: 5px;
                        }
                        p {
                            font-size: 14px;
                        }
                    }
                    span {
                        line-height: 70px;
                        font-size: 16px;
                        color: #959595;
                    }
                    &:before {
                        content: '';
                        width: 1px;
                        height: 50px;
                        position: absolute;
                        background-color: #ddd;
                        top: 0;
                        left: 40px;
                    }
                }
                .green {
                    .title {
                        p {
                            color: greenyellow;
                        }
                    }
                    &:before {
                        background-color: greenyellow;
                    }
                }
                .purple {
                    .title {
                        p {
                            color: purple;
                        }
                    }
                    &:before {
                        background-color: purple;
                    }
                }
                .pink {
                    .title {
                        p {
                            color: pink;
                        }
                    }
                    &:before {
                        background-color: pink;
                    }
                }
                .yellow {
                    .title {
                        p {
                            color: rgb(173, 173, 73);
                        }
                    }
                    &:before {
                        background-color: rgb(173, 173, 73);
                    }
                }
            }
        }
        .imgs {
            padding: 20px;
            background-color: #ddd;
            margin: 0 auto;
            text-align: center;
            position: relative;
            box-sizing: border-box;
            img {
                width: 200px;
                height: 120px;
                border: 5px solid #fff;
                position: relative;
                z-index: 2;
            }
            &::before {
                content: '';
                width: 200px;
                height: 120px;
                background-color: #768590;
                border: 5px solid #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -100px;
                margin-top: -60px;
                z-index: 0;
                transform: rotate(-5deg);
            }
            &::after {
                content: '';
                width: 200px;
                height: 120px;
                background-color: #eff4de;
                border: 5px solid #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -100px;
                margin-top: -60px;
                z-index: 0;
                transform: rotate(4deg);
            }
        }
        /* 可以设置不同的进入和离开动画 */
        /* 设置持续时间和动画函数 */
        .fade-enter-active {
            transition: all .5s ease;
        }
        .fade-leave-active {
            transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .fade-enter, .fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
            transform: translateX(100%);
            opacity: 0;
        }
    }
</style>