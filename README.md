---

---

# app-vue

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

------

### 问题汇总：

#### 1. 深拷贝与浅拷贝

- 浅拷贝

  浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据。

  对于数组，更常见的浅拷贝方法便是`slice(0)`和 `concat()`
  ES6 比较常见的浅拷贝方法便是 `Object.assign`

- 深拷贝

1. JSON.parse(JSON.stringify(obj))

   但是 `JSON.parse()`、`JSON.stringify`也存在一个问题，`JSON.parse() `和J `SON.stringify()`能正确处理的对象只有`Number、String、Array`等能够被 json 表示的数据结构，因此函数这种不能被 json 表示的类型将不能被正确处理。

2. 遍历实现属性复制

   方法一：

   ​	既然浅拷贝只能实现非`object`第一层属性的复制，那么遇到`object`只需要通过递归实现浅拷贝其中内部的属性即可：

   ```javascript
   function extend(source) {
     var target
     if (typeof source === 'object') {
       target = Array.isArray(source) ? [] : {}
       for (var key in source) {
         if (source.hasOwnProperty(key)) {
           if (typeof source[key] !== 'object') {
             target[key] = source[key]
           } else {
             target[key] = extend(source[key])
           }
         }
       }
     } else {
       target = source
     }
     return target
   }
   ```

   方法二：

   ​	先判断类型，分别克隆，达到了各种数据类型深克隆的实现

   ```javascript
   function deepClone(obj) {
     	if (obj === null) return null
     	if (typeof obj !== 'object') return obj
     	if (obj.constructor === Date) return new Date(obj)
     	if (obj.constructor === RegExp) return new RegExp(obj)
     	const newObj = new obj.constructor () // 保持继承链
     	for (let key in obj) {
     		if (obj.hasOwnProperty(key)) { // 不遍历其原型链上的属性
     			const val = obj[key]
               // 使用arguments.callee解除与函数名的耦合。
     			newObj[key] = typeof val === 'object' ? arguments.callee(val) : val
     		}
     	}
     	return newObj
     }
   ```

#### 2. 子组件引入图片路径问题

​	首先图片路径 imgPath 有二种写法： 
​	一、如果图片是在 assets 文件夹下面的话，需要在路径前面加上 require 函数才行，否则 webpack 会识别不了路径报错

```javascript
"imgPath": require("../../assets/logo.png")，
```
​	二、还可以把图片放到 static 文件夹下面，这样的话就不需要 require ，可以像原来传统的方式那样写,
```javascript
"imgPath": "../../../static/logo.png"，
```

#### 3. 路由跳转的三种方式

- <router-link to='需要跳转到的页面的路径'> 浏览器在解析时，将它解析成一个类似于`<a>` 的标签。
- this.$router.push({ path:’/user’})
- this.$router.replace{path：‘/’ }

#### 4. \$route和$router的区别

- `$router` 为 `VueRouter` 实例，想要导航到不同 `URL`，则使用 `$router.push` 方法

- `$route` 为当前 `router` 跳转对象里面可以获取 `name` 、 `path` 、 `query` 、 `params` 等

#### 5. NextTick 是做什么的

​	`$nextTick` 是在下次 `DOM` 更新循环结束之后执行延迟回调，在修改数据之后使用 `$nextTick`，则可以在回调中获取更新后的 `DOM`

#### 6 Vue 组件 data 为什么必须是函数

​	因为js本身的特性带来的，如果 `data` 是一个对象，那么由于对象本身属于引用类型，当我们修改其中的一个属性时，会影响到所有Vue实例的数据。如果将 `data` 作为一个函数返回一个对象，那么每一个实例的 `data` 属性都是独立的，不会相互影响了


#### 7. vue自定义轮播组件

​	难点在于给每个图片的切换过程添加过渡效果。可尝试使用Vue自带的class钩子，或直接使用css的transition属性，也可以用`setTimeout`方法加递归来实现。如果使用css的`transition`过渡方法，在处理边界的无限滚动上总会在chrome浏览器上有一下闪动，即使添加了`-webkit-transform-style: preserve-3d;`

 和` -webkit-backface-visibility: hidden;` 也还是没用，而且要配合`transition`的 `transitionend `事件对于IE浏览器的支持也不怎么好。

​	实现思路：首尾各加一张假图，利用css3过渡属性，由于vue中我没法监听过渡完成`transitionend`事件，取巧用延迟来控制图片位置秒切，并设置节流阀。

#### 8. vue 引入公共css文件

​	1、在入口js文件main.js中引入，一些公共的样式文件，可以在这里引入。

```html
import Vue from 'vue'
import App from './App' // 引入App这个组件
import router from './router' /* 引入路由配置 */
import '../static/css/global.css' /*引入公共样式*/
```

​	2、在index.html中引入

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>stop</title>
    <link rel="stylesheet" href="./static/css/global.css"> /*引入公共样式*/
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```


​	3、在app.vue中引入，但是这样引入有一个问题，就是在index.html的HEADH上会多出一个空的`<style></style>`

```html
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import './../static/css/global.css'; /*引入公共样式*/
</style>
```

#### 9. `<transition-group>` 组件

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`。你也可以通过 `tag` 特性更换为其他元素。
- [过渡模式]不可用，因为我们不再相互切换特有的元素。
- 内部元素 **总是需要** 提供唯一的 `key` 属性值。

#### 10. 圆形滚动进度条动画效果

- 方法一、css3实现思路：两半圆环交替旋转

​	利用两个矩形来完成这么一个圆形进度条效果，特别注意overflow这条规则，起着关键作用

- 方法二、svg实现--<circle>

​	SVG 是使用 XML 来描述二维图形和绘图程序的语言。

​	SVG 的主要竞争者是 Flash。与 Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容。而 Flash 则是未开源的私有技术。

​	Internet Explorer9，火狐，谷歌Chrome，Opera和Safari都支持SVG。IE8和早期版本都需要一个插件 - 如Adobe SVG浏览器，这是免费提供的。

#### 11. vue 实现移动端页面切换效果

​	在应用transform属性的时候，fixed定位会变成absolute。页面转换的时候，就变成了相对translation定位。所以如果子页面中有绝对定位的话，移动的过程中页面会变形。当父级元素有transform的元素，子级的fixed的特性将转换成absolute。例如，绝对定位在页面底部的footer组件。

​	页面中用到fixed固定底部面板区域, 但是在vue router动画中会出现位置抖动(因为存在多个不同底部面板, 无法把面板移出transition), 具体就是顶部紧跟着内容高度而不是固定在视图下方, 查了下发现是tansfrom的标准所致。

#### 12. 在 vue 项目中使用 echarts

1. 安装echarts依赖

   ```
   npm install echarts -S
   ```

2. 创建图表

- 全局引入

  `main.js`

```javascript
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
```

​	`text.vue`

```javascript
<div id="myChart" :style="{width: '300px', height: '300px'}"></div>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
```

​	注意： 这里echarts初始化应在钩子函数mounted()中，这个钩子函数是在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用

- 按需引入

  上面全局引入会将所有的echarts图表打包，导致体积过大，所以我觉得最好还是按需引入。

​	`Hello.vue`

```javascript
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
```

​	这里之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全。

#### 13. vue/cli3.0 处理静态资源

​	静态资源可以通过两种方式进行处理：

- 在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。

- 放置在 `public` 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。

  何时使用 `public` 文件夹?

- 你需要在构建输出中指定一个文件的名字。

- 你有上千个图片，需要动态引用它们的路径。

- 有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 `<script>` 标签引入没有别的选择。

#### 14. 引入 better-scroll 滚动插件，实现区域滚动

1. 初始化better-scroll时，默认是垂直方向（y轴滑动）

   ```javascript
   this.scroll = new BScroll(this.$refs.wrapper, {})
   ```

   实现横向区域滚动，需定义`scrollX`为true

   ```javascript
   this.scroll = new BScroll(this.$refs.wrapper, {
       startX: 0,
       click: true,
       scrollX: true, // 横向滚动
       scrollY: false, // 忽略竖直方向的滚动
       eventPassthrough: "vertical"
   })
   ```

2. 利用better-scroll 提供的 API--`scrollTo(x, y, time, easing)`实现移动端导航点击自动滑动效果

   **实例调用** -- `this.scroll.scrollTo()`

   **注**：scroll只处理容器的第一个子元素，其他的元素会被忽略，如果里面需要滚动的部分有好几部分。一定要拿一个元素把他包裹起来

#### 15. 移动端 vue 项目解决遮罩层滚动穿透问题

1. 当弹框明显小于页面的时候，确保不需要滑动查看内容时，可在最外层的遮盖层添加：`@touchmove.prevent`
2. 弹框的内容明显长过屏幕，需要弹框内容滑动，主页页面不滑动

#### 16. JS 中 forEach 不能用 break

​	forEach()无法在所有元素都传递给调用的函数之前终止遍历。也就是说，没有像for循环中使用的相应的break语句。如果要提前终止，必须把forEach()方法放在一个try块中，并能抛出一个异常。如果forEach()调用的函数抛出foreach.break异常，循环会提前终止

#### 17. flex 最后一行左对齐

​	布局上要求item两端对齐，而且最后一行在列不满的情况下要求左对齐，使用flex的`justify-content: space-between;`实现时发现最后一行不能左对齐，而是两端对齐方式，下图不是项目上想要的效果（不使用flex也可以实现，仅讨论使用flex实现）

在网上查了很多资料:

1. 添加几个空item（对我来说最有效的，适用于大多数场景） 根据布局列数添加空item，比如每行最大n列，那么在最后添加n-1个空item即可

   ```html
    <li style="height: 0px;visibility: hidden;"></li>
   ```

2. 利于after（适用于每行列数确定的场景）

```css
ul:after {
    content: "";
    flex: auto;
 }
```

#### 18. 在 Vue 组件中获得 Vuex 状态

​	由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在**计算属性**中返回某个状态

```javascript
computed: {
    navList () {
    	return this.$store.state.CurrentNavList
    }
}
```

#### 19. PostCSS是什么

> PostCSS is a tool for transforming CSS with JS plugins. These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.

你可以在使用预处理器的情况下使用它，也可以在原生的css中使用它。它都是支持的，并且它具备着一个庞大的生态系统，例如你可能常用的`Autoprefixer`，就是PostCSS的一个非常受欢迎的插件，被Google, Shopify, Twitter, Bootstrap和CodePen等公司广泛使用。

根目录下配置`postcss.config.js`

```javascript
module.exports = {
  plugins: {
    'postcss-import': {}
  }
}
```

#### 20. CSS object-fit 属性

- contain

  被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加**黑边**。

- cover

  被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。

- fill

  被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。

- none

  被替换的内容将保持其原有的尺寸。

- scale-down

  内容的尺寸与 `none` 或 `contain` 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

**注**： 虽然ie不支持，但用于移动端H5就比较适合

#### 21.动态九宫格布局

1. 实现一个和页面等宽的正方形父盒子
2. 子盒子定位到正方形父盒子中央
3. 等待页面加载完成后，再给其加类名改变子盒子定位（添加过渡）

> 1vw = 1% viewport width 
> 1vh = 1% viewport height

