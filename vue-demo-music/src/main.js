import 'babel-polyfill'
import fastclick from 'fastclick'
// import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './common/stylus/index.styl'

// Vue.config.productionTip = false
// Vue.prototype.axios = axios

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
