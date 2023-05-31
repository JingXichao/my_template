const files = require.context('./', true, /\.vue$/)

export default {
  install(Vue) {
    files.keys().forEach((item) => {
      const component = files(item)
      Vue.component(component.default.name, component.default)
    })
  },
}
