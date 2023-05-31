const files = require.context('./directives', false, /\.js$/)

export default {
  install(Vue) {
    files.keys().forEach((key) => {
      Vue.directive(key.slice(2, -3), files(key).default)
    })
  },
}
