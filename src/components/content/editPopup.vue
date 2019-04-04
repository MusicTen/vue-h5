<template>
    <div class="popup" ref="channelList" :style="{height:popupHeight+'px'}">
        <!-- better-scroll只处理容器的第一个子元素，其他的元素会被忽略，如果里面需要滚动的部分有好几部分。一定要拿一个元素把他包裹起来 -->
        <div> 
            <div class="title">
                <span>点击进入频道</span>
                <button v-if="!isEdit" @click="eidt">编辑</button>
                <span v-if="isEdit" class="done" @click="done">完成</span>
                <span v-if="!isEdit" class="last" @click="close">×</span>
            </div>
            <ul class="list">
                <li v-for="item in selected" :key="item.id">{{item.name}}<span v-if="isEdit" @click="del(item.id)">×</span></li>
            </ul>
            <div class="title">
                <span>点击添加更多频道</span>
            </div>
            <ul class="list">
                <li v-for="item in unselected" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
        
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                popupHeight: this.$store.state.windowHeight - 154,
                selected: this.$store.state.CurrentNavList,
                // unselected: this.$store.state.NavList,
                isEdit: false,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.channelList, {
                    startY: 0,
                    click: true,
                    scrollX: false, // 忽略横向滚动
                    scrollY: true, // 竖直方向的滚动
                })
            })
        },
        computed: {
            unselected: function() {
                let that = this
                let arr = []
                var bl = true
                that.$store.state.CurrentNavList.forEach(s=>{
                    // var bl = that.$store.state.NavList.some(i=>{i.id == s.id})
                    // if (bl) {
                    //     arr.push(s)
                    // }
                })
                return arr
            } 
        },
        methods: {
            eidt () {
                this.isEdit = true
            },
            done () {
                this.isEdit = false
            },
            close () {
                this.$emit("close"); // $emit的作用就是将事件进行向上派发
            },
            del (id) {
                console.log(id)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .popup {
        width: 100%;
        // height: 500px;
        overflow: hidden;
        background-color: #fff;
        position: fixed;
        top: 104px;
        left: 0;
    }
    .title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        padding: 0 10px;
        position: relative;
        border-bottom: 1px solid #f2f2f2;
        button {
            width: 55px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 15px;
            border: none;
            outline: none;
            background-color: #519aff;
            color: #fff;
            position: absolute;
            top: 12px;
            right: 60px;
        }
        span:first-child {
            color: #626262;
        }
        .done {
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            position: absolute;
            top: 0;
            right: 10px;
        }
        .last {
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 40px;
            color: #7f7f7f;
            position: absolute;
            top: 0;
            right: 10px;
        }
        
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        box-sizing: border-box;
        &:after {
            content: "";
            flex: 90px;
        }
        li {
            width: 90px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #f7f7f8;
            margin-top: 14px;
            border-radius: 4px;
            position: relative;
            span {
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                font-size: 14px;
                color: #fff;
                background-color: #999;
                border-radius: 50%;
                position: absolute;
                top: -5px;
                right: -5px;
            }
        }
    }
    ul:nth-child(2) {
        li {
            color: #519aff;
        }
    }
</style>
