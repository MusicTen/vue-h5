<template>
  <div class="home">
    <Header></Header>
    <Guage></Guage>
    <Radar></Radar>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Guage from "@/components/content/Guage";
import Radar from "@/components/content/Radar";

export default {
  components: {
    Header,
    Guage,
    Radar
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