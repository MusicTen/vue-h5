<template>
  <div class="index">
    <Header :isShow="!1"></Header>
    <Slider :imgData="lists"></Slider>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in carLists" :key="index"><img :src="item" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <BSlider :lists="carLists"></BSlider>
    <!-- <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker> -->
    <Footer :index="0"></Footer>
  </div>
</template>
<script>
import Swiper from "swiper";
// import VDistpicker from 'v-distpicker'
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Slider from "@/components/content/Slider.vue";
import BSlider from "@/components/content/BScroll/BSlider.vue";
export default {
  components: {
    Header,
    Footer,
    Slider,
    BSlider,
    // VDistpicker
  },
  data() {
    return {
      lists: [
        require("../assets/img/banner/1.jpg"),
        require("../assets/img/banner/2.jpg"),
        require("../assets/img/banner/3.jpg")
      ],
      carLists: [
        require("../assets/img/car/plan2.jpg"),
        require("../assets/img/car/plan3.jpg"),
        require("../assets/img/car/plan4.jpg"),
        require("../assets/img/car/plan4.jpg")
      ],
      scroll: null
    }
  },
  beforeCreate() {
    console.log("index-beforeCreate")
  },
  created() {
    console.log("index-created")
  },
  mounted() {
    console.log("index-mounted")
    this.init()
  },
  methods: {
    init() {
      this.swiper()
    },
    swiper() {
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
    }
  },
  destroyed() {
    console.log("index-destroyed")
  }
};
</script>
<style lang="scss" scoped>
.index {
  padding: 100px 0;
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
