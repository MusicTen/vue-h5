<template>
  <div class="home">
    <Header></Header>
    <Guage></Guage>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Guage from "@/components/content/Guage";
export default {
  components: {
    Header,
    Guage
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
}
</style>