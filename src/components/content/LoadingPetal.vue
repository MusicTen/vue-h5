<template>
  <div class="out">
    <div class="fade-in">
      <div class="container">
        <div class="one common"></div>
        <div class="two common"></div>
        <div class="three common"></div>
        <div class="four common"></div>
        <div class="five common"></div>
        <div class="six common"></div>
        <div class="seven common"></div>
        <div class="eight common"></div>
      </div>
      <div class="bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.out {
  height: 300px;
  background: #000;
	position: relative;
}
.container {
  width: 40vw;
  height: 40vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.common {
  height: 5vw;
  max-height: 100%;
  overflow: auto;
  width: 2vw;
  margin: auto;
  max-width: 100%;
  position: absolute;
  border-radius: 0vw 10vw 0vw 10vw;
  box-shadow: inset 0vw 0vw 0vw 0.1vw #e645d0, 0vw 0vw 1.5vw 0vw #e645d0;
}
.one {
  transform: rotate(45deg);
  left: 0;
  right: 0;
  top: 0;
  bottom: 7.5vw;
}
.two {
  transform: rotate(90deg);
  left: 5.5vw;
  right: 0;
  top: 0;
  bottom: 5.5vw;
}
.three {
  transform: rotate(135deg);
  left: 7.5vw;
  right: 0;
  top: 0;
  bottom: 0;
}
.four {
  transform: rotate(180deg);
  left: 5.5vw;
  right: 0;
  top: 5.5vw;
  bottom: 0;
}
.five {
  transform: rotate(225deg);
  left: 0;
  right: 0;
  top: 7.5vw;
  bottom: 0;
}
.six {
  transform: rotate(270deg);
  left: 0;
  right: 5.5vw;
  top: 5.5vw;
  bottom: 0;
}
.seven {
  transform: rotate(315deg);
  left: 0;
  right: 7.5vw;
  top: 0;
  bottom: 0;
}
.eight {
  transform: rotate(360deg);
  left: 0;
  right: 5.5vw;
  top: 0;
  bottom: 5.5vw;
}
.bar {
  width: 20vw;
  height: 0.25vw;
  left: 0;
  right: 0;
  top: 16vw;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #e645d0;
}
.progress {
  width: 20vw;
  height: 0.5vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  background: #17e1e6;
}
.one {
  animation: one 1s ease infinite;
}
@keyframes one {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.two {
  animation: two 1s 0.125s ease infinite;
}
@keyframes two {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.three {
  animation: three 1s 0.25s ease infinite;
}
@keyframes three {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.four {
  animation: four 1s 0.375s ease infinite;
}
@keyframes four {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.five {
  animation: five 1s 0.5s ease infinite;
}
@keyframes five {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.six {
  animation: six 1s 0.625s ease infinite;
}
@keyframes six {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.seven {
  animation: seven 1s 0.75s ease infinite;
}
@keyframes seven {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.eight {
  animation: eight 1s 0.875s ease infinite;
}
@keyframes eight {
  0%,
  100% {
  }
  50% {
    box-shadow: inset 0vw 0vw 0vw 0.1vw #17e1e6, 0vw 0vw 1.5vw 0vw #17e1e6;
  }
}
.container {
  animation: container 5s linear infinite;
}
@keyframes container {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.progress {
  animation: progress 15s ease;
}
@keyframes progress {
  0% {
    left: -24vw;
  }
  10% {
    left: -20vw;
  }
  30% {
    left: -16vw;
  }
  50% {
    left: -12vw;
  }
  65% {
    left: -10vw;
  }
  80% {
    left: -4vw;
  }
  100% {
    left: 0;
  }
}
.fade-in {
  animation: fade-in 2s ease;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.out {
  animation: out 2s 15s ease;
}
@keyframes out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>