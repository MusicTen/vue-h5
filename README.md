# app-vue

## Project setup
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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
------

### 问题汇总：

#### 1.子组件图片路径问题

首先图片路径 imgPath 有二种写法： 
一，如果图片是在 assets 文件夹下面的话，需要在路径前面加上 require 函数才行，否则 webpack 会识别不了路径报错

```javascript
"imgPath": require("../../assets/logo.png")，
```
二，还可以把图片放到 static 文件夹下面，这样的话就不需要 require ，可以像原来传统的方式那样写,
```javascript
"imgPath": "../../../static/logo.png"，
```