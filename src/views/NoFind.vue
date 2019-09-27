<template>
  <div class="nofind">
    <img @click="gohome" src="./../assets/img/logo.png" alt>
    <h1 @click="click1">404</h1>
    <h1 @click="click2">节流点击</h1>
  </div>
</template>
<script>
import { _debounce, _throttle } from "@/assets/js/util.js";
export default {
  data() {
    return {
      index: 1
    }
  },
  methods: {
    gohome() {
      this.$router.push('/')
    },
    click1: _debounce(function() {
      console.log(1, this.index)
    }, 500),
    click2: _throttle(function() {
      console.log(2)
    }, 1000)
  }
};
</script>
<style lang="scss" scoped>
.nofind {
  text-align: center;
  padding-top: 100px;
  h1 {
    text-align: center;
    font-size: 40px;
    color: #999;
  }
}
</style>
