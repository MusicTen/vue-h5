
<template>
  <div class="news">
    <Header :isShow="!1"></Header>
    <div class="navbar">
      <ul>
        <li
          v-for="(item, index) in navLists"
          :key="index"
          :class="{active:currentIndex === index}"
          @click="choose(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div v-if="currentIndex === 0">热点</div>
    <div v-else-if="currentIndex === 1">时政</div>
    <Footer :index="2"></Footer>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentIndex: 0,
      navLists: ["热点", "时政", "军事", "数码", "汽车", "娱乐", "国际"]
    };
  },
  methods: {
    choose(index) {
      console.log(index);
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  .navbar {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #bbbbbb;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      width: 120%;
      height: 50px;
      display: flex;
      li {
        flex: 1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        box-sizing: border-box;
      }
      .active {
        border-bottom: 2px solid skyblue;
      }
    }
  }
}
</style>