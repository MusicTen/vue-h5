<template>
  <div class="footer">
    <div
      v-for="(item, index) in tabbar"
      :key="index"
      :class="currentIndex===index?'active item':'item'"
      @click="choose(index,item.path)"
    >
      <img :src="currentIndex===index?item.iconActive:item.icon">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    index: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      currentIndex: this.index,
      tabbar: [
        {
          title: "首页",
          path: "/",
          icon: require("../../assets/img/tabbar/home2.png"),
          iconActive: require("../../assets/img/tabbar/home1.png")
        },
        {
          title: "列表",
          path: "/list",
          icon: require("../../assets/img/tabbar/list2.png"),
          iconActive: require("../../assets/img/tabbar/list1.png")
        },
        {
          title: "新闻",
          path: "/news/1",
          icon: require("../../assets/img/tabbar/news2.png"),
          iconActive: require("../../assets/img/tabbar/news1.png")
        },
        {
          title: "个人中心",
          path: "/home",
          icon: require("../../assets/img/tabbar/excel2.png"),
          iconActive: require("../../assets/img/tabbar/excel1.png")
        }
      ]
    };
  },
  watch: {
    $route(to) {
      // 监听路由变化
      // console.log(to.path);
      let currenHash = to.path;
      // 例 /news/1 子路由tabbar状态不变
      if (currenHash.indexOf("/") > -1) {
        currenHash = "/" + currenHash.split("/")[1];
      }
      console.log(currenHash);
      this.currentIndex = this.tabbar.findIndex(value =>
        value.path.includes(currenHash)
      );
    }
  },
  methods: {
    choose(index, path) {
      // console.log(index, path)
      this.currentIndex = index;
      // console.log(this.$router)
      this.$router.push({ path: path });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100px;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  flex: 4;
  .item {
    width: 25%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-decoration: none;
    color: #999;
    img {
      width: 40px;
      height: 40px;
      margin-top: 4px;
    }
    span {
      margin-top: 4px;
    }
  }
  .active {
    color: #f95352;
  }
}
</style>