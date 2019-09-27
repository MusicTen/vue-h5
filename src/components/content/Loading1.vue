<template>
  <div class="loading">
    <div id="liquid">
      <div v-for="(v, i) in 4" :key="i"></div>
    </div>

    <div id="ajaxloader1"></div>

    <div id="ajaxloader2">
      <div class="outer"></div>
      <div class="inner"></div>
    </div>

    <div id="ajaxloader3">
      <div class="outer"></div>
      <div class="inner"></div>
    </div>

    <div id="ajaxbar1">
      <div id="block1" class="barlittle"></div>
      <div id="block2" class="barlittle"></div>
      <div id="block3" class="barlittle"></div>
      <div id="block4" class="barlittle"></div>
      <div id="block5" class="barlittle"></div>
    </div>

    <div id="ajaxwave1">
      <div id="pointcircle1" class="pointcircle"></div>
      <div id="pointcircle2" class="pointcircle"></div>
      <div id="pointcircle3" class="pointcircle"></div>
      <div id="pointcircle4" class="pointcircle"></div>
      <div id="pointcircle5" class="pointcircle"></div>
    </div>

    <div id="facebook">
      <div class="bar" v-for="(v, i) in 3" :key="i"></div>
    </div>

    <div id="shadowloader">
      <span v-for="(v, i) in 5" :key="i"></span>
    </div>

    <h1 class="loadingtext">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </h1>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.loading {
  background: #ccc;
}

#liquid {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.35);
  position: relative;
  div {
    position: absolute;
    width: 100px;
    height: 100px;
    animation: alpha 2.25s linear infinite forwards;
    background: rgba(231, 76, 60, 0.75);
    &:nth-child(1) {
      top: -50%;
      left: -50%;
    }
    &:nth-child(2) {
      top: -50%;
      right: -50%;
    }
    &:nth-child(3) {
      bottom: -50%;
      right: -50%;
    }
    &:nth-child(4) {
      bottom: -50%;
      left: -50%;
    }
  }
  @keyframes alpha {
    0% {
      transform: rotate(0);
      background: rgba(231, 76, 60, 0.75);
    }
    25% {
      background: rgba(230, 126, 34, 0.75);
    }
    50% {
      border-radius: 50%;
      background: rgba(142, 68, 173, 0.75);
    }
    75% {
      background: rgba(41, 128, 185, 0.75);
    }
    100% {
      transform: rotate(360deg);
      background: rgba(231, 76, 60, 0.75);
    }
  }
}

#ajaxloader1 {
  width: 30px;
  height: 30px;
  border: 8px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 25px 2px;
  color: #fff;
  border-color: #f00;
  color: #cc0000;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spin-right 1s linear infinite normal;
  animation-delay: 0;
  margin: 30px auto 0;
}
#ajaxloader1:after {
  display: block;
  width: 13px;
  height: 13px;
  margin: 3px;
  border: 6px solid #f00;
  content: " ";
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
}
#ajaxloader2 {
  margin: 30px auto 0;
}
#ajaxloader2 .outer {
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: 0.9;
  width: 50px;
  height: 50px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  animation: spin-right 0.5s linear infinite normal;
  animation-delay: 0;
  margin: 0 auto;
}
#ajaxloader2 .inner {
  display: block;
  width: 30px;
  height: 30px;
  border: 5px solid rgba(0, 183, 229, 0.9);
  opacity: 0.9;
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  box-shadow: 0 0 35px rgba(0, 61, 76, 0.9);
  position: relative;
  top: -50px;
  margin: 0 auto;
  animation: spin-left 0.5s linear infinite normal;
  animation-delay: 0;
}
#ajaxloader3 {
  margin: 0 auto;
}
#ajaxloader3 .outer {
  border: 5px solid rgba(0, 229, 183, 0.9);
  opacity: 0.9;
  border-right-color: transparent;
  border-left-color: transparent;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
  animation: spin-pulse 1s linear infinite normal;
  animation-delay: 0;
}
#ajaxloader3 .inner {
  border: 5px solid rgba(0, 229, 183, 0.9);
  opacity: 0.9;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
  width: 30px;
  height: 30px;
  position: relative;
  top: -50px;
  margin: 0 auto;
  animation: spin-right 1s linear infinite normal;
  animation-delay: 0;
}
#ajaxbar1 {
  margin: 0 auto;
  overflow: hidden;
  width: 90px;
}
#ajaxbar1 .barlittle {
  background-color: #8aff51;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='@color1', endColorstr='@color2');
  background-image: -webkit-linear-gradient(45deg, #8aff51 25%, #f1ffea);
  background-image: -moz-linear-gradient(45deg, #8aff51 25%, #f1ffea);
  border: 1px solid #111;
  width: 10px;
  height: 10px;
  float: left;
  margin-left: 5px;
  opacity: 0.1;
  animation: pulse 1s linear infinite normal;
  animation-delay: 0;
}
#ajaxbar1 #block1 {
  animation-delay: 0.3s;
}
#ajaxbar1 #block2 {
  animation-delay: 0.2s;
}
#ajaxbar1 #block3 {
  animation-delay: 0.1s;
}
#ajaxbar1 #block4 {
  animation-delay: 0.2s;
}
#ajaxbar1 #block5 {
  animation-delay: 0.3s;
}
#ajaxwave1 {
  margin: 30px auto 0;
  overflow: hidden;
  height: 100px;
}
#ajaxwave1 .pointcircle {
  background-color: #f00;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='@color1', endColorstr='@color2');
  background-image: -webkit-linear-gradient(90deg, #f00 25%, #ff9999);
  background-image: -moz-linear-gradient(90deg, #f00 25%, #ff9999);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0 0 6px #cc0000;
  margin: 0 auto;
  position: relative;
}
#ajaxwave1 #pointcircle1 {
  animation: ball-circlex 2s infinite cubic-bezier(0, 0, 0.35, 1) normal;
  animation-delay: 0;
}
#ajaxwave1 #pointcircle2 {
  opacity: 0.7;
  top: 2px;
  animation: ball-circlex 2s infinite cubic-bezier(0, 0, 0.35, 1) normal;
  animation-delay: 0.1s;
}
#ajaxwave1 #pointcircle3 {
  opacity: 0.5;
  top: 4px;
  animation: ball-circlex 2s infinite cubic-bezier(0, 0, 0.35, 1) normal;
  animation-delay: 0.2s;
}
#ajaxwave1 #pointcircle4 {
  opacity: 0.3;
  top: 6px;
  animation: ball-circlex 2s infinite cubic-bezier(0, 0, 0.35, 1) normal;
  animation-delay: 0.3s;
}
#ajaxwave1 #pointcircle5 {
  opacity: 0.1;
  top: 8px;
  animation: ball-circlex 2s infinite cubic-bezier(0, 0, 0.35, 1) normal;
  animation-delay: 0.4s;
}
#facebook {
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
#facebook .bar {
  background: #99aaca;
  border: 1px solid #96a6c9;
  float: left;
  margin: 6px 4px 0 0;
  width: 6px;
  height: 18px;
  animation: facebook-pulse 1s linear infinite normal;
  animation-delay: 0;
}
#facebook .bar:nth-child(2) {
  animation-delay: 0.1s;
}
#facebook .bar:last-child {
  animation-delay: 0.2s;
  margin-right: 0;
}
#shadowloader {
  display: block;
  position: relative;
  overflow: hidden;
  width: 5em;
  margin: 30px auto;
  padding: 20px 10px;
}
#shadowloader span {
  display: block;
  float: left;
  width: 0.5em;
  height: 3em;
  margin: 0 0.5em 0 0;
  background: #635863;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='@color1', endColorstr='@color2');
  background-image: -webkit-linear-gradient(top, #635863 25%, #3d353b);
  background-image: -moz-linear-gradient(top, #635863 25%, #3d353b);
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0), 1px 1px 1px 0 rgba(0, 0, 0, 0),
    1px 1px 1px 0 rgba(0, 0, 0, 0);
  animation: pound 0.7s ease-in-out infinite alternate;
  animation-delay: 0.05s;
  transform-origin: center bottom;
}
#shadowloader span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
#shadowloader span:nth-child(3) {
  -webkit-animation-delay: 0.35s;
  -moz-animation-delay: 0.35s;
  -o-animation-delay: 0.35s;
  animation-delay: 0.35s;
}
#shadowloader span:nth-child(4) {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  -o-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
#shadowloader span:nth-child(5) {
  -webkit-animation-delay: 0.65s;
  -moz-animation-delay: 0.65s;
  -o-animation-delay: 0.65s;
  animation-delay: 0.65s;
}
h1.loadingtext {
  text-align: center;
  text-transform: uppercase; // 大写
  font-family: "Nunito", sans-serif;
  font-size: 4.6875em;
  color: transparent;
  letter-spacing: 0.01em;
}
h1.loadingtext span {
  text-shadow: 0 0 2px rgba(22, 22, 22, 0.9), 0 15px 25px rgba(0, 0, 0, 0.3),
    0 -2px 3px rgba(0, 0, 0, 0.1), 0 -5px 10px rgba(22, 22, 22, 0.5),
    0 5px 10px rgba(0, 0, 0, 0.3), 0 3px 4px rgba(22, 22, 22, 0.2),
    0 0 20px rgba(22, 22, 22, 0.45);
  animation: letters 0.85s ease-in-out infinite alternate;
  animation-delay: 0;
}
h1.loadingtext span:nth-child(2) {
  animation-delay: 0.15s;
}
h1.loadingtext span:nth-child(3) {
  animation-delay: 0.3s;
}
h1.loadingtext span:nth-child(4) {
  animation-delay: 0.45s;
}
h1.loadingtext span:nth-child(5) {
  animation-delay: 0.6s;
}
h1.loadingtext span:nth-child(6) {
  animation-delay: 0.75s;
}
h1.loadingtext span:nth-child(7) {
  animation-delay: 0.9s;
}
@keyframes spin-right {
  from {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(180deg);
    opacity: 1;
  }
  to {
    transform: rotate(360deg);
    opacity: 0.2;
  }
}
@keyframes spin-left {
  from {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(-180deg);
    opacity: 1;
  }
  to {
    transform: rotate(-360deg);
    opacity: 0.2;
  }
}
@keyframes spin-pulse {
  from {
    transform: rotate(160deg);
    opacity: 0;
    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
  }
  50% {
    transform: rotate(145deg);
    opacity: 1;
  }
  to {
    transform: rotate(-320deg);
    opacity: 0;
  }
}
@keyframes pulse {
  from {
    transform: scale(1.2);
    opacity: 1;
  }
  to {
    transform: scale(0.7);
    opacity: 0.1;
  }
}
@keyframes ball-circlex {
  from {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(25px);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-25px);
    animation-timing-function: ease-in;
  }
  to {
    transform: translateX(0px);
  }
}
@keyframes facebook-pulse {
  10% {
    margin-top: 5px;
    height: 22px;
    border-color: #d1d8e6;
    background-color: #bac5db;
  }
  20% {
    margin-top: 0px;
    height: 32px;
    border-color: #d1d7e2;
    background-color: #bac5db;
  }
  30% {
    margin-top: 1px;
    height: 30px;
    border-color: #d1d8e6;
    background-color: #bac5db;
  }
  40% {
    margin-top: 3px;
    height: 26px;
  }
  50% {
    margin-top: 5px;
    height: 22px;
  }
  60% {
    margin-top: 6px;
    height: 18px;
  }
}
@keyframes loadpulse-ball {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes loadpulse-glow {
  from {
    transform: scale(0);
    opacity: 0;
  }
  10% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.75);
    opacity: 0;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes pound {
  to {
    transform: scale(1.2);
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.65),
      2px 6px 12px 0 rgba(0, 0, 0, 0.5), 3px 8px 15px 0 rgba(0, 0, 0, 0.45);
  }
}
@keyframes letters {
  to {
    text-shadow: 0 0 2px rgba(204, 208, 212, 0.2), 0 0 3px rgba(0, 0, 0, 0.02),
      0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0),
      0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0),
      0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>