<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
    <router-view/>
    <!-- </transition> -->
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      tabbar: ["index", "list", "news", "home"],
      transitionName: "slide-left"
    };
  },

  watch: {
    $route() {
      // vue路由切换过渡效果
      console.log(this.$router.history.current.name);
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  // filter: grayscale(100%);
  font-family: Arial, sans-serif;
}
@keyframes slideInLeft {
  from {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideInRight {
  from {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideLeftOut {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
}
@keyframes slideRightOut {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
}
.slide-left-enter-active {
  animation: slideInLeft 0.3s forwards;
  z-index: 5;
}
.slide-left-leave-active {
  animation: slideLeftOut 0.3s forwards;
  z-index: 3;
}
.slide-right-enter-active {
  animation: slideInRight 0.3s forwards;
  z-index: 5;
}
.slide-right-leave-active {
  animation: slideRightOut 0.3s forwards;
  z-index: 3;
}
</style>
