<template>
  <!-- 没有实现触摸滑动 -->
  <div class="slider">
    <ul
      :class="['items', hasTransition?'addTransition':'removeTransition']"
      :style="containerStyle"
    >
      <li>
        <img :src="imgs[imgs.length-1]" alt>
      </li>
      <li v-for="(item, index) in imgs" :key="index">
        <img :src="item" alt>
        <span>{{index}}</span>
      </li>
      <li>
        <img :src="imgs[0]" alt>
      </li>
    </ul>
    <ul class="btns">
      <li @click="clickBtn(1)"></li>
      <li @click="clickBtn(-1)"></li>
    </ul>
    <ul class="points">
      <li
        v-for="(item, index) in imgs"
        :key="index"
        :class="{'active':index==currentIndex}"
        @click="clickPoints(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Slider",
  props: {
    imgData: Array
  },
  data() {
    return {
      currentIndex: 0,
      distance: -this.$store.state.windowWidth, // 屏幕宽度
      imgs: this.imgData,
      hasTransition: true,
      clickTime: 0,
      timer: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    clickBtn(index) {
      // console.log(index, this.$store.state.windowWidth)
      // 点击间隔小于一秒不执行，等待动画执行完成
      if (new Date() - this.clickTime > 1000) {
        // 图片偏移量
        this.hasTransition = true;
        this.distance += this.$store.state.windowWidth * index;
        // 小点随动
        this.currentIndex = this.currentIndex - index;
        if (this.currentIndex < 0) {
          this.currentIndex = this.imgs.length - 1;
        }
        if (this.currentIndex > this.imgs.length - 1) {
          this.currentIndex = 0;
        }
        // console.log(this.currentIndex)
        // console.log(this.distance)
        // 点击完成，记录时间
        this.clickTime = new Date();
      }
    },
    clickPoints(index) {
      this.currentIndex = index;
      this.hasTransition = true;
      this.distance = -this.$store.state.windowWidth * (index + 1);
    },
    init() {
      this.play();
      // 当页面失焦时停止轮播，页面聚焦时开始轮播
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    play() {
      let _this = this;
      // 当定时器 window.setInterval() 在多个异步回调中使用时，
      // 就有可能在某种机率下开启多个执行队列，
      // 所以为了保险起见，不仅应该在该清除时清除定时器，还要在每次使用之前也清除一遍。
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        _this.clickBtn(-1);
      }, 3000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  computed: {
    containerStyle() {
      //这里用了计算属性，用transform来移动整个图片列表
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    }
  },
  watch: {
    distance() {
      let _this = this;
      // 到达第一张图位置，动画结束后就更新位置
      if (_this.distance == 0) {
        setTimeout(() => {
          _this.distance = -_this.$store.state.windowWidth * _this.imgs.length;
          _this.hasTransition = false; // 移除过渡
        }, 1000);
      }
      // 到达最后一张图位置，动画结束后就更新位置
      if (
        _this.distance ==
        -_this.$store.state.windowWidth * (_this.imgs.length + 1)
      ) {
        setTimeout(() => {
          _this.distance = -_this.$store.state.windowWidth;
          _this.hasTransition = false; // 移除过渡
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  ul {
    list-style: none;
  }
  .items {
    width: 500%; // 应该暴露出去，动态修改
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    li {
      width: 20%; // 应该暴露出去，动态修改
      height: 100%;
      float: left;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。
        // object-fit: contain; // 保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
      }
      span {
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-radius: 50%;
        font-size: 36px;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.3);
        position: absolute;
        top: 30%;
        left: calc(50% - 25px);
      }
    }
    &.addTransition {
      transition: all 1s;
    }
    &.removeTransition {
      transition: none;
    }
  }
  .btns {
    li {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgba(49, 49, 49, 0.2);
      position: absolute;
      top: calc(50% - 30px); // 注：减号前后要有空格，否则很可能不生效！
      &:first-child {
        left: 20px;
        &::before {
          content: "";
          width: 30px;
          height: 30px;
          border-style: solid;
          border-color: #d9dbdb;
          border-width: 4px 0 0 4px;
          position: absolute;
          top: 13px;
          left: 19px;
          transform: rotate(-45deg);
        }
      }
      &:last-child {
        right: 20px;
        &::before {
          content: "";
          width: 30px;
          height: 30px;
          border-style: solid;
          border-color: #d9dbdb;
          border-width: 4px 4px 0 0;
          position: absolute;
          top: 13px;
          right: 19px;
          transform: rotate(45deg);
        }
      }
    }
  }
  .points {
    width: 100px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 50px);
    display: flex;
    justify-content: space-around;
    li {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid #d6d3d3;
      background-color: rgba(49, 49, 49, 0.2);
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
