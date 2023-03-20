import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import i18n from '@/language'
import './plugins'
import './registerServiceWorker'
/**
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

const { mockXHR } = require('@/utils/static')
mockXHR()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: (h) => h(App),
})
