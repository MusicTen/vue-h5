<template>
  <div class="content">
    <div class="socket">
      <div
				:class="{r1: i > 0 && i < 7, r2: i > 6 && i < 19, r3: i > 18}"
				v-for="(v, i) in 37"
				:key="i">
        <div></div>
        <div class="h2"></div>
        <div class="h3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 纯CSS3实现的六边形加载动画DEMO演示
};
</script>
<style lang="scss" scoped>
.content {
  height: 300px;
  background: #373940;
	position: relative;
}
.socket {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50%;
  margin-top: -100px;
  & > div {
    height: 30px;
    width: 30px;
    transition: all 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    & > div {
      background: #abf8ff;
      width: 30px;
      height: 17px;
      position: absolute;
      top: 5px;
      animation-name: fade;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
  & > div:nth-child(1) {
    margin-left: -15px;
    margin-top: -15px;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  & > div:nth-child(2) {
    margin-left: -47px;
    margin-top: -15px;
  }
  & > div:nth-child(3) {
    margin-left: -31px;
    margin-top: -43px;
  }
  & > div:nth-child(4) {
    margin-left: 1px;
    margin-top: -43px;
  }
  & > div:nth-child(5) {
    margin-left: 17px;
    margin-top: -15px;
  }
  & > div:nth-child(6) {
    margin-left: -31px;
    margin-top: 13px;
  }
  & > div:nth-child(7) {
    margin-left: 1px;
    margin-top: 13px;
  }
  & > div:nth-child(8) {
    margin-left: -63px;
    margin-top: -43px;
  }
  & > div:nth-child(9) {
    margin-left: 33px;
    margin-top: -43px;
  }
  & > div:nth-child(10) {
    margin-left: -15px;
    margin-top: 41px;
  }
  & > div:nth-child(11) {
    margin-left: -63px;
    margin-top: 13px;
  }
  & > div:nth-child(12) {
    margin-left: 33px;
    margin-top: 13px;
  }
  & > div:nth-child(13) {
    margin-left: -15px;
    margin-top: -71px;
  }
  & > div:nth-child(14) {
    margin-left: -47px;
    margin-top: -71px;
  }
  & > div:nth-child(15) {
    margin-left: 17px;
    margin-top: -71px;
  }
  & > div:nth-child(16) {
    margin-left: -47px;
    margin-top: 41px;
  }
  & > div:nth-child(17) {
    margin-left: 17px;
    margin-top: 41px;
  }
  & > div:nth-child(18) {
    margin-left: -79px;
    margin-top: -15px;
  }
  & > div:nth-child(19) {
    margin-left: 49px;
    margin-top: -15px;
  }
  & > div:nth-child(20) {
    margin-left: -63px;
    margin-top: -99px;
  }
  & > div:nth-child(21) {
    margin-left: 33px;
    margin-top: -99px;
  }
  & > div:nth-child(22) {
    margin-left: 1px;
    margin-top: -99px;
  }
  & > div:nth-child(23) {
    margin-left: -31px;
    margin-top: -99px;
  }
  & > div:nth-child(24) {
    margin-left: -63px;
    margin-top: 69px;
  }
  & > div:nth-child(25) {
    margin-left: 33px;
    margin-top: 69px;
  }
  & > div:nth-child(26) {
    margin-left: 1px;
    margin-top: 69px;
  }
  & > div:nth-child(27) {
    margin-left: -31px;
    margin-top: 69px;
  }
  & > div:nth-child(28) {
    margin-left: -95px;
    margin-top: -43px;
  }
  & > div:nth-child(29) {
    margin-left: -95px;
    margin-top: 13px;
  }
  & > div:nth-child(30) {
    margin-left: 49px;
    margin-top: 41px;
  }
  & > div:nth-child(31) {
    margin-left: -79px;
    margin-top: -71px;
  }
  & > div:nth-child(32) {
    margin-left: -111px;
    margin-top: -15px;
  }
  & > div:nth-child(33) {
    margin-left: 65px;
    margin-top: -43px;
  }
  & > div:nth-child(34) {
    margin-left: 65px;
    margin-top: 13px;
  }
  & > div:nth-child(35) {
    margin-left: -79px;
    margin-top: 41px;
  }
  & > div:nth-child(36) {
    margin-left: 49px;
    margin-top: -71px;
  }
  & > div:nth-child(37) {
    margin-left: 81px;
    margin-top: -15px;
  }
}
.h2 {
  transform: rotate(60deg);
}
.h3 {
  transform: rotate(-60deg);
}

.r1 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
}

.r2 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.4s;
}

.r3 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.6s;
}

.r1 > div {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
}

.r2 > div {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.4s;
}

.r3 > div {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.6s;
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0.01);
    transform: scale(0.01);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fade {
  0% {
    background: #abf8ff;
  }

  50% {
    background: #90bbbf;
  }

  100% {
    background: #abf8ff;
  }
}
</style>