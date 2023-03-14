/**

 * @description 公共布局及样式自动引入
 */

import Vue from 'vue'

const requireZxLayouts = require.context(
  '../components/layouts',
  true,
  /\.vue$/
)
requireZxLayouts.keys().forEach((fileName) => {
  const componentConfig = requireZxLayouts(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
