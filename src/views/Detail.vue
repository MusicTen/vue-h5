<template>
  <div class="content">
    <Header></Header>
    <div v-if="!datas" class="skeleton">
      <!-- Displays if datas is not set.
        Options
        speed: Number - How many seconds between pulses of the loader.
        height / width: Number - size of the loader contents.
        primaryColor: String - The color of the elements.
        secondaryColor: String - The color of the pulser.
        animate: Boolean - Whether or not to display the pulser.
      -->
      <InstagramLoader :animate="false"></InstagramLoader>
    </div>
    <div v-else>
      <Acircle :data="datas" :isDetail="true"/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Acircle from "@/components/content/Acircle";
import { InstagramLoader } from "vue-content-loader"; // 骨架屏
export default {
  components: {
    Header,
    Acircle,
    InstagramLoader
  },
  data() {
    return {
      datas: null,
      followData: JSON.parse(sessionStorage.getItem('Follow')),
      popularData: JSON.parse(sessionStorage.getItem('Popular'))
    }
  },
  mounted() {
    // Just pretend this is an AJAX call. Use your imagination.
    let idx = this.$route.query.idx
    let type = this.$route.query.type
    setTimeout(() => {
      this.datas = [type == 'popular' ? this.popularData[idx] : this.followData[idx]]
    }, 700)
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding-top: 100px;
}
</style>
