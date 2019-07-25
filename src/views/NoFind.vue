<template>
  <div class="nofind">
    <img @click="gohome" src="./../assets/img/logo.png" alt>
    <h1>404</h1>
  </div>
</template>
<script>
export default {
  methods: {
    gohome() {
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
.nofind {
  text-align: center;
  h1 {
    text-align: center;
    font-size: 40px;
    color: #999;
  }
}
</style>
