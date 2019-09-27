<template>
  <div class="main">
    <h3>纯CSS3 Loading加载动画</h3>
    <ul>
      <li :class="{active: curIdx == i}" v-for="(v, i) in list" :key="i" @click="handle(i)">{{ v }}</li>
    </ul>
    <Loading1 v-if="curIdx == 0" />
    <Loading2 v-if="curIdx == 1" />
    <LoadingSvg v-if="curIdx == 2" />
    <LoadingHexagon v-if="curIdx == 2" />
    <LoadingPetal v-if="curIdx == 2" />
    <Cat v-if="curIdx == 3" />
  </div>
</template>
<script>
import Loading1 from "@/components/content/Loading1.vue";
import Loading2 from "@/components/content/Loading2.vue";
import LoadingSvg from "@/components/content/LoadingSvg.vue";
import LoadingHexagon from "@/components/content/LoadingHexagon.vue";
import LoadingPetal from "@/components/content/LoadingPetal.vue";
import Cat from "@/components/content/Cat.vue";
export default {
  name: 'loading',
  components: {
    Loading1,
    Loading2,
    LoadingSvg,
    LoadingHexagon,
    LoadingPetal,
    Cat
  },
  data() {
    return {
      curIdx: 0,
      list: ['五彩', '炫酷', 'SVG', '良口三三']
    }
  },
  methods: {
    handle(i) {
      this.curIdx = i
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  min-height: 100vh;
  padding-top: 20px;
  box-sizing: border-box;
  h3 {
    text-align: center;
    font-size: 36px;
    color: salmon;
  }
  ul {
    height: 50px;
    margin: 40px auto;
    list-style: none;
    li {
      float: left;
      width: 150px;
      height: 50px;
      color: skyblue;
      line-height: 50px;
      text-align: center;
      border: 2px solid salmon;
      margin: 0 5px;
    }
    .active {
      color: #fff;
      background-color: salmon;
    }
  }
}
</style>