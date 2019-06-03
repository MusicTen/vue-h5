import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/flexible'
import VueLazyload from 'vue-lazyload'
import './assets/css/base.css' // 引入基础css文件，重置样式
import 'swiper/dist/css/swiper.css'

Vue.use(VueLazyload)

Vue.config.productionTip = false // 作用是阻止vue在启动时生成生产提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
