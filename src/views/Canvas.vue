<template>
  <div class="main">
    <canvas width="200" height="200" ref="container"></canvas>
  </div>
</template>
<script>

export default {
  name: 'test',
  data() {
    return {
      imgs: [require('../assets/img/logo.png')]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height: 750px;
  background-color: skyblue;
}
  
</style>
