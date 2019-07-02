<template>
  <div class="header">
    <img v-if="isShow" src="../../assets/back.png" @click="goback" alt="返回">vue-app
    <span>{{['&#x2600;', '&#x263c;', '&#x2601;', '&#x2746;', '&#x2745;', '&#x2745;'][random]}}</span>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      random: Math.ceil(Math.random() * 5)
    };
  },
  methods: {
    goback() {
      // console.log(this.$router)
      this.$router.back(-1);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100px;
  line-height: 100px;
  color: #fff;
  background-color: skyblue;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  font-size: 32px;
  img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 25px;
    left: 25px;
  }
  span {
    font-size: 50px;
    position: absolute;
    top: 0;
    right: 40px;
  }
}
</style>