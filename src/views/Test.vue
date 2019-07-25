<template>
  <div class="main" ref="container"></div>
</template>
<script>
// Error: WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.
// import * as PIXI from 'pixi.js'
import * as PIXI from 'pixi.js-legacy'

//Aliases
let Application = PIXI.Application
  // loader = PIXI.loader,
  // resources = PIXI.loader.resources,
  // Graphics = PIXI.Graphics,
  // Sprite = PIXI.Sprite
// 创建一个PIXI的实例，并展示出来，通常需要以下几步：
  //   创建一个舞台 (stage)
  //   创建一个画布 (render)
  //   把画布插入DOM中
  //   创建一个精灵 (sprite)
  //   把精灵加入画布 
  //   把画布加入舞台
  //   刷新舞台

export default {
  name: 'test',
  data() {
    return {
      imgs: [require('../assets/img/logo.png')]
    }
  },
  mounted() {
    console.log('test')
    this.init()
  },
  methods: {
    init() {
      this.sayHello()
      this.createScense()
    },
    sayHello() {
      let type = "WebGL"
      if(!PIXI.utils.isWebGLSupported()) {
        type = "canvas"
      }
      PIXI.utils.sayHello(type)
    },
    createScense() {
      // 屏幕的设备像素比
      const devicePixelRatio = window.devicePixelRatio || 1
      const { innerWidth } = window
      const canvasHeight = 100
      const app = new Application({
        width: innerWidth,
        transparent: true, // default: false
        antialias: true, // 安卓 三星A9 设置平滑属性，导致渲染错误bug
        height: canvasHeight,
        // backgroundColor: 0x000000,
        resolution: devicePixelRatio
      })
      app.renderer.autoResize = true
      this.$refs.container.appendChild(app.view)
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height: 750px;
  background-color: skyblue;
}
  
</style>
