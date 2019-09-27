<template>
  <div class="slider">
    <div class="slide-wrapper" ref="slider" >
      <div class="slide-group" :style="{width: lists.length *100 + 'vw'}">
        <div class="slide-item" v-for="(item, index) in lists" :key="index"><img :src="item" alt=""></div>  
      </div>
    </div>
    <ul class="dots">
      <li
        :class="{active: currentIndex === index}"
        v-for="(item, index) in lists.length"
        :key="index"
      ></li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: 'BSlider',
  props: {
    /**
     * 列表的数据
     * */
    lists: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      slide: null,
      currentIndex: 0
    }
  },
  mounted() {
    this.bscroll()
  },
  methods: {
    bscroll() {
      this.slider = new BScroll(this.$refs.slider, {
        loop: true,
        scrollX: true,
        scrollY: false, // 不允许纵向滚动
        click: true,
        snap: {
          loop: false, // 开启循环播放
          stepX: this.$refs.slider.offsetWidth, // 步长(每页宽度)
          stepY: 500, // 每页高度为 500px
          threshold: 0.3, // 滚动距离超过宽度(/高度)的 30% 时切换图片
          speed: 400 // 切换动画时长 400ms
        }
      })
      this.slider.on('scrollEnd', () => {
        console.log(this.slider.getCurrentPage())
        this.currentIndex = this.slider.getCurrentPage().pageX // 轮播到下一张，获取当前的index
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.slider {
  min-height: 1px; // 防止文本溢出
  position: relative;
  .slide-wrapper {
    width: 100%;
    margin: 20px auto;
    overflow: hidden;
    .slide-group {
      height: 500px;
      .slide-item {
        float: left;
        width: 100vw;
        img {
          width: 100%; 
        }
      }
    }
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 10;
    text-align: center;
    transform: translateX(-50%);
    li {
      display: inline-block;
      margin: 0 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
    }
    .active {
      width: 20px;
      border-radius: 5px;
      background: #fff;
    }
  }
}
</style>
