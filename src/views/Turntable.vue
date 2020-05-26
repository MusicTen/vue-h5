<template>
  <div class="turntable">
    <div class="control">
      <span>Prize number: {{ prizeNumber }}</span>
      <button
        type="button"
        @click="!rolling && prizeNumber < 10 && prizeNumber++"
        :disabled="rolling || prizeNumber === 10"
      >
        Add
      </button>
      <button
        type="button"
        @click="!rolling && prizeNumber > 5 && prizeNumber--"
        :disabled="rolling || prizeNumber === 5"
      >
        Remove
      </button>
    </div>
    <div class="wheel-wrapper">
      <div class="wheel-pointer" @click="onClickRotate">Start</div>
      <div
        class="wheel-bg"
        :class="{ freeze: freeze }"
        :style="`transform: rotate(${wheelDeg}deg)`"
      >
        <div class="prize-list">
          <div
            class="prize-item-wrapper"
            v-for="(item, index) in prizeList"
            :key="index"
          >
            <div
              class="prize-item"
              :style="`transform: rotate(${(360 / prizeList.length) * index}deg)`"
            >
              <div class="prize-icon"><img :src="item.icon" /></div>
              <div class="prize-name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "turntable",
  data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      prizeNumber: 10,
      prizeListOrigin: [
        {
          icon: "https://picsum.photos/40?random=1",
          name: "1"
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "2"
        },
        {
          icon: "https://picsum.photos/40?random=2",
          name: "3"
        },
        {
          icon: "https://picsum.photos/40?random=3",
          name: "4"
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "5"
        },
        {
          icon: "https://picsum.photos/40?random=4",
          name: "6"
        },
        {
          icon: "https://picsum.photos/40?random=5",
          name: "7"
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "8"
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "9"
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "10"
        }
      ]
    };
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    }
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      this.rolling = true;
      const { wheelDeg, prizeList } = this;
      const random = Math.floor(Math.random() * prizeList.length);
      console.log(random);
      this.wheelDeg = wheelDeg - (wheelDeg % 360) + 6 * 360 + (360 - (360 / prizeList.length) * random);
      setTimeout(() => {
        this.rolling = false;
        console.log("Result：" + prizeList[random].name);
      }, 4500);
    }
  },
  watch: {
    prizeNumber() {
      this.freeze = true;
      this.wheelDeg = 0;
      setTimeout(() => {
        this.freeze = false;
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.turntable {
  min-height: 100vh;
  background: #dd7c7d;
}
.control {
  height: 100px;
  line-height: 100px;
  font-size: 32px;
  button {
    width: 150px;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    margin: 0 5px;
  }
}
.wheel-wrapper {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .wheel-pointer {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background: yellow;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 160px;
    z-index: 10;
  }
  .wheel-bg {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    overflow: hidden;
    transition: transform 4s ease-in-out;
    background: #7eef97;
  }
  .freeze {
    transition: none;
    background: red;
  }
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  .prize-item-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    .prize-item {
      width: 100%;
      height: 100%;
      transform-origin: bottom;
      .prize-name {
        padding: 16px 0;
      }
      .prize-icon {
        img {
          filter: brightness(40%);
        }
      }
    }
  }
}
</style>
