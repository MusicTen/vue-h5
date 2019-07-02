<template>
  <div class="index">
    <Header :isShow="!1"></Header>
    <Slider :imgData="lists"></Slider>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/car/plan2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/car/plan3.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/car/plan4.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <Footer :index="0"></Footer>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Slider from "@/components/content/banner.vue";
import Swiper from "swiper";

export default {
  components: {
    Header,
    Footer,
    Slider
  },
  data() {
    return {
      lists: [
        require("../assets/banner/1.jpg"),
        require("../assets/banner/2.jpg"),
        require("../assets/banner/3.jpg")
      ]
    };
  },
  beforeCreate() {
    console.log("index-beforeCreate");
  },
  created() {
    console.log("index-created");
  },
  mounted() {
    console.log("index-mounted");
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  },
  destroyed() {
    console.log("index-destroyed");
  }
};
</script>
<style lang="scss" scoped>
.index {
  .swiper-container {
    width: 100%;
    margin: 20px auto;
    .swiper-wrapper {
      .swiper-slide {
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
