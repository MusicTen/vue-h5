<template>
  <div class="home">
    <div class="infor">
      <img src="../assets/img/car/headImg.jpg" alt>
      <img class="bg" src="../assets/img/car/headImg.jpg" alt>
      <h4 @click="test">yesterday</h4>
      <p>资料完成度60%></p>
      <span @click="more">&#xbb;</span>
      <button @click="add">签到+10积分</button>
    </div>
    <div class="well">
      <ul :class="{animate: isAnimate}">
        <li v-for="(item, index) in icons" :key="index" @click="iconsClick(index)">
          <img :src="item.img" alt>
          <p>{{item.title}}</p>
        </li>
        <li>
          <img src="../assets/img/share/add.png" alt>
        </li>
      </ul>
    </div>
    <Footer :index="3"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/common/Footer";
import { setTimeout } from "timers";
export default {
  components: {
    Footer
  },
  data() {
    return {
      icons: [
        {
          title: "alibaba",
          img: require("../assets/img/share/alipay.png")
        },
        {
          title: "wechat",
          img: require("../assets/img/share/wechat.png")
        },
        {
          title: "weibo",
          img: require("../assets/img/share/weibo.png")
        },
        {
          title: "qq",
          img: require("../assets/img/share/qq.png")
        },
        {
          title: "Facebook",
          img: require("../assets/img/share/Facebook.png")
        },
        {
          title: "twitter",
          img: require("../assets/img/share/twitter.png")
        },
        {
          title: "tumblr",
          img: require("../assets/img/share/tumblr.png")
        },
        {
          title: "pinterest",
          img: require("../assets/img/share/pinterest.png")
        },
        {
          title: "github",
          img: require("../assets/img/share/github.png")
        }
      ],
      isAnimate: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isAnimate = true;
    }, 100);
  },
  methods: {
    test() {
      this.$router.push({ path: "/test" })
    },
    more() {
      this.$router.push({ path: "/timeline" })
    },
    add() {
      this.$router.push({ path: "/credit" })
    },
    iconsClick(i) {
      if (i === 1) {
        this.$router.push({ path: "/share" })
      } else if (i === 8) {
        location.href = 'https://github.com/MusicTen'
      } else {
        this.$router.push({ path: "/circle" })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
}
.infor {
  width: 100%;
  height: 500px;
  text-align: center;
  color: #fff;
  img:first-child {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-top: 80px;
  }
  .bg {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: blur(7px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* (水平半径：左上 右上 右下 左下)/(垂直半径：左上 右上 右下 左下) */
    border-radius: 0 0 200px 200px/0 0 50px 50px;
  }
  span {
    position: absolute;
    top: 0;
    right: 40px;
    font-size: 80px;
  }
  h4 {
    margin-top: 20px;
    font-size: 36px;
  }
  p {
    margin-top: 10px;
    font-size: 24px;
  }
  button {
    width: 280px;
    height: 80px;
    line-height: 80px;
    border-radius: 40px;
    text-align: center;
    color: #333;
    background-color: #f2f2f2;
    font-size: 32px;
    margin-top: 30px;
    background-image: linear-gradient(to right, pink, skyblue);
  }
}
.well {
  ul {
    width: 100%;
    height: 500px;
    position: relative;
    li {
      width: 33.33%;
      height: 33.33%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #888;
      opacity: 0;
      img {
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
      }
      &:last-child {
        opacity: 1;
      }
    }
  }
  .animate {
    li {
      opacity: 1;
    }
    li:nth-child(1) {
      top: 0;
      left: 0;
      transform: translate(0);
    }
    li:nth-child(2) {
      top: 0;
      transform: translate(-50%, 0);
    }
    li:nth-child(3) {
      top: 0;
      left: auto;
      right: 0;
      transform: translate(0);
    }
    li:nth-child(4) {
      left: 0;
      transform: translate(0, -50%);
    }
    li:nth-child(6) {
      left: auto;
      right: 0;
      transform: translate(0, -50%);
    }
    li:nth-child(7) {
      top: auto;
      bottom: 0;
      left: 0;
      transform: translate(0);
    }
    li:nth-child(8) {
      top: auto;
      bottom: 0;
      transform: translate(-50%, 0);
    }
    li:nth-child(9) {
      top: auto;
      left: auto;
      bottom: 0;
      right: 0;
      transform: translate(0);
    }
    li:last-child {
      opacity: 0;
    }
  }
}
</style>