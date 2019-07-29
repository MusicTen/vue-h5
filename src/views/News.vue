<template>
  <div class="content">
    <Header :isShow="!1"></Header>
    <div class="wrapper" ref="wrapper">
      <ul class="tab-list" ref="tabList">
        <li class="tab-item" v-for="item in navList" :key="item.id" @click="change(item)">
          <span class="tab-name" :class="{'active': currentTabIndex == item.id}">{{item.name}}</span>
        </li>
      </ul>
      <div class="add" @click="add">+</div>
    </div>
    <div class="router">
      <GoodsListRender :type="currentTabIndex"></GoodsListRender>
    </div>
    <transition name="fade">
      <EditPopup v-if="showPopup" @close="close"></EditPopup>
    </transition>
    <Footer :index="2"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import EditPopup from "@/components/content/EditPopup";
import GoodsListRender from "@/components/content/BScroll/GoodsListRender";
import BScroll from "better-scroll";
export default {
  components: {
    Header,
    Footer,
    EditPopup,
    GoodsListRender
  },
  data() {
    return {
      // navList: this.$store.state.CurrentNavList,
      currentTabIndex: 1,
      showPopup: false
    };
  },
  computed: {
    // 由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
    navList() {
      return this.$store.state.CurrentNavList;
    }
  },
  mounted() {
    // 动态计算
    let width = this.navList.length * 50;
    this.$refs.tabList.style.width = width + "px";
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          startX: 0,
          click: true,
          scrollX: true, // 横向滚动
          scrollY: false, // 忽略竖直方向的滚动
          eventPassthrough: "vertical"
        });
      } else {
        this.scroll.refresh(); // 重新计算better-scroll，当DOM结构发生变化的时候务必要调用确保滚动的效果正常
      }
    });
  },
  updated() {
    // console.log(this.navList)
    // 数据更新后 重新计算导航栏宽度
    let width = this.navList.length * 50;
    this.$refs.tabList.style.width = width + "px";
  },
  methods: {
    change(item) {
      if (item !== undefined) {
        this.currentTabIndex = item.id;
      }
      // 以下部分编写点击相应的navList item时，渲染的逻辑代码
      this.$router.push(`/news/${ this.currentTabIndex }`);
      // 实现移动端导航点击自动滑动效果
      const viewportWidth = this.$store.state.windowWidth;
      const tabListWidth = this.$refs.tabList.clientWidth;
      const minTranslate = Math.min(0, viewportWidth - tabListWidth);
      const middleTranslate = viewportWidth / 2;
      const items = this.$refs.tabList.children;
      let width = 0;
      this.navList.every((v, i) => {
        if (v.id === item.id) {
          return false;
        }
        width += items[i].clientWidth;
        return true;
      });
      let translate = middleTranslate - width;
      translate = Math.max(minTranslate, Math.min(0, translate));
      // 实例调用scrollTo方法(x横轴坐标、y纵轴坐标、滚动动画执行的时长)
      this.scroll.scrollTo(translate, 0, 700);
    },
    add() {
      this.showPopup = true;
    },
    close() {
      this.showPopup = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 100px 0;
  .wrapper {
    // 用于横向滚动父盒子
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    .tab-list {
      height: 80px;
      padding: 0 60px 0 40px;
      display: flex;
      .tab-item {
        width: 120px;
        line-height: 80px;
        .tab-name {
          display: block;
          position: relative;
          font-size: 30px;
          color: #666;
          &.active {
            transition: all 0.2s;
            transform: scale(1.04);
            color: #fc9153;
          }
        }
      }
    }
    .add {
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 50px;
      color: #999;
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .router {
    width: 100%;
    height: calc(100vh - 280px);
    position: relative;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(500px);
}
</style>