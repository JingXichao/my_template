import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import i18n from '@/language'
import './plugins'
/**
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

const { mockXHR } = require('@/utils/static')
mockXHR()

/**
 * @description 页面跟着显示器分辨率缩放, 缩放基准为宽度1920, 大于1920保持不变, 小于1920缩小
 */
const scaleView = () => {
  const orgWidth = 1920
  let curWidth = window.document.documentElement.clientWidth
  let curHeight = window.document.documentElement.clientHeight
  let scale = 1
  if (curWidth < orgWidth) {
    scale = curWidth / orgWidth
  }
  if (scale <= 1) {
    document.body.style.zoom = scale
  }
  document.documentElement.style.setProperty(
    '--curHeight',
    `${curHeight / scale}px`
  )
}
window.addEventListener('resize', scaleView)
scaleView()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: (h) => h(App),
})
