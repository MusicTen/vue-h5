<template>
  <div class="goods-list-render-view">
    <div class="scroll-wrapper">
      <div ref="scroll" class="scroll">
        <ul class="foods-wrapper">
          <li v-for="(food, index) in foods" :key="index" class="food-item border-1px">
            <div class="icon">
              <img width="60" height="60" v-lazy="food.icon">
            </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '@/assets/js/goods-list.json'
  import BScroll from 'better-scroll'
  export default {
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        foods: data.goods[this.type - 1].foods
      }
    },
    watch: {
      type(val) {
        let typeVal = val > 8 ? Math.floor(Math.random() * 8) : val - 1
        this.foods = data.goods[typeVal].foods
        console.log(this.foods)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroll, {
          mouseWheel: true,
          scrollbar: {
            fade: false,
            interactive: true
          },
          dblclick: true,
          probeType: 3
        })
        this.scroll.on('scrollStart', () => {
          console.log('scrollStart')
        })
        this.scroll.on('scroll', (pos) => {
          console.log('pos:', pos)
        })
        this.scroll.on('scrollEnd', () => {
          console.log('scrollEnd')
        })
        this.scroll.on('dblclick', (e) => {
          console.log('dblclick:', e)
        })
      })
    },
    destroyed() {
      this.scroll && this.scroll.destroy()
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .goods-list-render-view{
    width: 100%;
    height: 100%;
    .scroll-wrapper{
      position: absolute;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .scroll{
        height: 100%;
        .foods-wrapper{
          overflow: hidden;
          .food-item{
            display: flex;
            margin: 18px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            &:last-child{
              border: none;
              margin-bottom: 0;
            }
            .icon{
              flex: 0 0 60px;
              margin-right: 20px;
            }
            .content{
              flex: 1;
              .name{
                margin: 2px 0 6px 0;
                height: 40px;
                line-height: 40px;
                font-size: 28px;
                color: rgb(7, 17, 27);
              }
              .desc, .extra{
                line-height: 20px;
                font-size: 14px;
                color: rgb(147, 153, 159);
              }
              .desc{
                line-height: 30px;
                margin-bottom: 8px;
              }
              .extra{
                line-height: 30px;
                .count{
                  margin-right: 12px;
                }
              }
              .price{
                font-weight: 700;
                line-height: 40px;
                .now{
                  margin-right: 8px;
                  font-size: 24px;
                  color: rgb(240, 20, 20);
                }
                .old{
                  text-decoration: line-through;
                  font-size: 16px;
                  color: rgb(147, 153, 159);
                }
              }
              .cartcontrol-wrapper{
                position: absolute;
                right: 0;
                bottom: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>