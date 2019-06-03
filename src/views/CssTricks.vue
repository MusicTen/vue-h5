<template>
  <div>
    <Header></Header>
    <div class="tricks">
      <div id="square"></div>
      <div id="rectangle"></div>
      <div id="circle"></div>
      <div id="oval"></div>
      <div id="triangle-up"></div>
      <div id="triangle-down"></div>
      <div id="triangle-topleft"></div>
      <div id="heart"></div>
      <div id="egg"></div>
      <div id="tv"></div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.tricks {
  background-color: pink;
  div {
    margin: 5px auto;
  }
}
#square {
  width: 100px;
  height: 100px;
  background: red;
}
#rectangle {
  width: 200px;
  height: 100px;
  background: red;
}
#circle {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
}
#oval {
  width: 200px;
  height: 100px;
  background: red;
  border-radius: 100px / 50px;
}
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
#triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
}
#triangle-topleft {
  width: 0;
  height: 0;
  border-top: 100px solid rgba(0, 0, 0, 0.2);
  border-right: 100px solid transparent;
}
#heart {
  position: relative;
  width: 100px;
  height: 90px;
}
#heart:before,
#heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
#heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
#egg {
  display: block;
  width: 126px;
  height: 180px;
  background-color: red;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
#tv {
  position: relative;
  width: 200px;
  height: 150px;
  background: red;
  border-radius: 50% / 10%;
}
#tv:before {
  content: "";
  position: absolute;
  top: 10%;
  bottom: 10%;
  right: -5%;
  left: -5%;
  background: inherit;
  border-radius: 5% / 50%;
}
</style>

