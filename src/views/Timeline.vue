<template>
  <div class="timeline">
    <transition name="slide">
      <div v-if="isslide" class="header">
        <h3>cadillac XT4</h3>
        <div :class="['menu', {show:isshow}]" @click="showAside">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </transition>
    <div :class="['bgc', {fixed: isfixed}]">
      <div class="left">
        <h4>此刻 正当燃&#x2668;</h4>
        <p>{{time}}</p>
      </div>
      <div class="iCountUp">
        <ICountUp :endVal="endVal" :options="options"/>
      </div>
      <div class="right">
        <img src="../assets/car/headImg.jpg" @click="add" alt>
      </div>
    </div>
    <div v-if="isfixed" style="height: 260px"></div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in lists" :key="index" :class="colors[index]">
          <img :src="item.img" alt>
          <span :class="['heart',{zan:item.like}]" @click="zan(index)">&#x2764;</span>
          <div class="title">
            <h5>{{item.tips}}</h5>
            <p>{{item.matching}}</p>
          </div>
          <span>{{item.price}}</span>
        </li>
      </ul>
    </div>
    <div class="imgs">
      <img src="../assets/car/plan1.jpg" alt>
      <img src="../assets/search.png" @click="toSearch" alt>
    </div>
    <transition name="fade">
      <Aside v-if="isshow"></Aside>
    </transition>
  </div>
</template>
<script>
import Aside from "@/components/content/aside.vue";
import ICountUp from "vue-countup-v2";
export default {
  components: {
    Aside,
    ICountUp
  },
  data() {
    return {
      isslide: true,
      isshow: false,
      isfixed: false,
      colors: ["green", "purple", "pink", "yellow", ""],
      lists: [
        {
          img: require("../assets/car/plan2.jpg"),
          tips: "夺目设计 闪耀个性",
          matching: "28T技术型",
          price: "¥259700",
          like: false
        },
        {
          img: require("../assets/car/plan3.jpg"),
          tips: "风驰动力 感知竞逐",
          matching: "28T豪华型",
          price: "¥279700",
          like: true
        },
        {
          img: require("../assets/car/plan4.jpg"),
          tips: "智趣科技 连接未来",
          matching: "28T领先型",
          price: "¥289700",
          like: false
        },
        {
          img: require("../assets/car/plan5.jpg"),
          tips: "全能守护 无忧驾趣",
          matching: "28T四驱领先运动型",
          price: "¥314700",
          like: true
        },
        {
          img: require("../assets/car/plan2.jpg"),
          tips: "悦己而燃 青春征程",
          matching: "28T四驱铂金版",
          price: "¥352700",
          like: false
        }
      ],
      endVal: 1205,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "&#xa5;",
        suffix: ""
      }
    };
  },
  mounted() {
    // 在mounted钩子中给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    time() {
      let time = new Date();
      return (
        time.getFullYear() +
        "年" +
        (time.getMonth() + 1) +
        "月" +
        time.getDate() +
        "日"
      );
    }
  },
  methods: {
    showAside() {
      this.isshow = !this.isshow;
    },
    handleScroll() {
      // 触发滚动，就隐藏侧边栏
      this.isshow = false;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 10) {
        this.isslide = false;
      } else {
        this.isslide = true;
      }
      // 吸顶效果
      scrollTop > 50 ? (this.isfixed = true) : (this.isfixed = false);
    },
    toSearch() {
      this.$router.push({ path: "/search" });
    },
    add() {
      this.endVal += 50;
    },
    zan(index) {
      this.lists[index].like = !this.lists[index].like;
    }
  }
};
</script>
<style lang="scss" scoped>
.timeline {
  .header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    box-sizing: border-box;
    padding: 0 10px;
    h3 {
      color: #fff;
      font-size: 40px;
      font-family: "Times New Roman", Times, serif;
      font-style: italic;
    }
    .menu {
      width: 52px;
      height: 40px;
      display: flex;
      position: absolute;
      top: 16px;
      right: 20px;
      z-index: 9;
      flex-direction: column;
      justify-content: space-between;
      span {
        width: 100%;
        height: 4px;
        background-color: #fff;
        transition: all 0.7s;
      }
    }
    .show {
      span {
        background-color: #000;
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
    height: 400px;
    background: url("../assets/car/plan7.jpg") no-repeat top center;
    background-size: 100%;
    position: relative;
    .left {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: #979590;
      font-size: 30px;
      h4 {
        font-size: 30px;
        line-height: 32px;
        color: #ddd;
      }
    }
    .iCountUp {
      font-size: 32px;
      color: #ccccce;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .right {
      position: absolute;
      bottom: 20px;
      right: 20px;
      img {
        position: absolute;
        left: -150px;
        bottom: -60px;
        width: 120px;
        height: 120px;
        border: 2px solid #ddd;
        border-radius: 50%;
        box-shadow: 0 4px 10px #000;
      }
    }
    &::before {
      content: "Designed by MusicTen";
      position: absolute;
      top: -50px;
      z-index: -1;
      color: #ddd;
      font-size: 40px;
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .content {
    margin-bottom: 10px;
    ul {
      padding: 0 20px;
      li {
        display: flex;
        padding-top: 80px;
        position: relative;
        img {
          width: 180px;
          height: 120px;
        }
        .title {
          width: 40%;
          padding: 15px;
          h5 {
            font-size: 32px;
            margin-bottom: 5px;
          }
          p {
            font-size: 28px;
          }
        }
        .heart {
          font-size: 42px;
          position: absolute;
          bottom: 0px;
          left: 20px;
          color: rgba(255, 255, 255, 0.5);
        }
        .zan {
          color: rgba(247, 30, 30, 0.5);
        }
        span:last-child {
          line-height: 70px;
          font-size: 40px;
          color: #959595;
        }
        &:before {
          content: "";
          width: 2px;
          height: 80px;
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
    img:first-child {
      width: 300px;
      height: 170px;
      border: 5px solid #fff;
      position: relative;
      z-index: 2;
    }
    img:last-child {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -30px;
      margin-top: -30px;
      z-index: 2;
      filter: grayscale(20%);
      animation: identifier 2s cubic-bezier(0, 0, 0.58, 1) infinite;
    }
    @keyframes identifier {
      0% {
        transform: translateY(0);
      }
      37% {
        transform: translateY(8px);
      }
      75% {
        transform: translateY(3px);
      }
      85% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0);
      }
    }
    &::before {
      content: "";
      width: 300px;
      height: 170px;
      background-color: #768590;
      border: 5px solid #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -160px;
      margin-top: -90px;
      z-index: 0;
      transform: rotate(-5deg);
    }
    &::after {
      content: "";
      width: 300px;
      height: 170px;
      background-color: #eff4de;
      border: 5px solid #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -160px;
      margin-top: -90px;
      z-index: 0;
      transform: rotate(4deg);
    }
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-enter-active,
  .fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-leave-active,
  .fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateY(-100%);
  }
  .fade-enter, .fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>