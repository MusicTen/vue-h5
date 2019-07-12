<template>
  <div>
    <ul class="pic">
      <li v-for="(item, index) in this.data" :key="index">
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'photoset',
  props: {
    data: Array
  }
}
</script>
<style lang="scss" scoped>
.pic {
  li {
    img {
      width: 100%;
    }
  }
}
</style>
