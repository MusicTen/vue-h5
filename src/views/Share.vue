<template>
  <div class="content">
    <div class="main" ref="imageTofile">
      <h5>我的logo</h5>
      <img src="../assets/img/logo.png" alt="">
      <img :src="imgUrl" alt="">
    </div>
    <img class="draw" :src="htmlUrl" />
    <a class="download" :href="htmlUrl" download="">下载分享</a>
    <!-- download属性是HTML5新增的属性 -->
  </div>
</template>
<script>
import html2canvas from "html2canvas"
export default {
  data() {
    return {
      imgUrl: 'http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg',
      htmlUrl: ''
    }
  },
  mounted() {
    this.toImage()
  },
  // 经过验证，不管a标签的href属性值是base64还是url路径（相对路径pc端可以下载，绝对路径pc端会打开新标签页），手机端都不能使用a标签下载图片。
  // 可以考虑在手机端将生成的图片显示在页面上并提示用户长按图片保存。
  methods: {
    // 页面元素转图片
    toImage() {
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      console.log(this.$refs.imageTofile.offsetWidth)
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null,
        width: this.$refs.imageTofile.offsetWidth - .5, // 处理安卓多出来一部分的情况
        height: this.$refs.imageTofile.offsetHeight,
        // window.devicePixelRatio是设备像素比
        dpi: window.devicePixelRatio * 2,
        scale: 2
      }).then(canvas => {
        let url = canvas.toDataURL("image/png")
        this.htmlUrl = url // 把生成的base64位图片上传到服务器,生成在线图片地址
        console.log(url)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  background-color: salmon;
  .main {
    width: 700px;
    height: 600px;
    margin: 0 auto 20px;
    padding-top: 60px;
    box-sizing: border-box;
    background-image: linear-gradient(to right, pink , skyblue);
    h5 {
      color: #fff;
      font-size: 36px;
      margin-bottom: 60px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
  .draw {
    width: 700px;
    height: 600px;
  }
  .download {
    display: inline-block;
    text-decoration: none;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 30px;
    border: 2px solid cornsilk;
    font-size: 28px;
    color: #fff;
    margin: 20px 0;
    background-image: linear-gradient(to bottom, powderblue, palegreen);
  }
}
</style>