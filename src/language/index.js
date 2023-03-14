import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const files = require.context(`./langs`, false, /\.js$/)
const zhLangs = files
  .keys()
  .filter((item) => item.includes('zh_'))
  .map((item) => files(item).default)
const enLangs = files
  .keys()
  .filter((item) => item.includes('en_'))
  .map((item) => files(item).default)
const i18n = new VueI18n({
  locale: store.getters['settings/lang'],
  messages: {
    zh_CN: Object.assign(zhLocale, ...zhLangs),
    en_US: Object.assign(enLocale, ...enLangs),
  },
})

export default i18n
