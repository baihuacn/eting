// import 'babel-polyfill'
import 'common/stylus/index.styl'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

Vue.config.productionTip = false

Fastclick.attach(document.body) // 移动端click事件有300ms的延迟，移动端双击是缩放操作。

Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
