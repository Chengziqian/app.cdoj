// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'normalize.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import axios from 'axios'
axios.defaults.baseURL = '/api/'
Vue.$http = Vue.prototype.$http = axios

import lodash from 'lodash'
window._ = Window.prototype._ = lodash
Vue._ = Vue.prototype._ = lodash

import router from './router'
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach(route => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: { App }
})
