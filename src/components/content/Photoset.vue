<template>
  <div>
    <ul ref="Viewer" class="pic">
      <li v-for="(item, index) in this.data" :key="index">
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
  name: 'Photoset',
  props: {
    data: Array
  },
  mounted() {
    new Viewer(this.$refs.Viewer)
  }
}
</script>
<style lang="scss" scoped>
.pic {
  li {
    float: left;
    width: 30%;
    margin-left: 2.5%;
    margin-bottom: 1%;
    img {
      width: 100%;
    }
  }
}
</style>
