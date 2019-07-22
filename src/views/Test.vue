<template>
  <div class="main"></div>
</template>
<script>
import * as PIXI from 'pixi.js'
export default {
  name: 'test',
  data() {
    return {
      data: ''
    }
  },
  mounted() {
    console.log('test')
    // 创建一个PIXI的实例，并展示出来，通常需要以下几步：
    //   创建一个舞台 (stage)
    //   创建一个画布 (render)
    //   把画布插入DOM中
    //   创建一个精灵 (sprite)
    //   把精灵加入画布 
    //   把画布加入舞台
    //   刷新舞台
    let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()) {
      type = "canvas"
    }
    PIXI.utils.sayHello(type)
  },
  methods: {
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
