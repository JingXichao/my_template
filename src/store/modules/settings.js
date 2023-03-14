/**

 * @description 所有全局配置的状态管理，如无必要请勿修改
 */

import defaultSettings from '@/config'

const { tabsBar, layout, header, themeBar, localKey, defaultLang } =
  defaultSettings
const theme = JSON.parse(localStorage.getItem(localKey.theme)) || ''
const state = {
  tabsBar: theme.tabsBar || tabsBar,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  device: 'desktop',
  themeBar,
  lang: localStorage.getItem(localKey.lang) || defaultLang,
}
const getters = {
  collapse: (state) => state.collapse,
  device: (state) => state.device,
  header: (state) => state.header,
  layout: (state) => state.layout,
  tabsBar: (state) => state.tabsBar,
  themeBar: (state) => state.themeBar,
  lang: (state) => state.lang,
}
const mutations = {
  changeLayout: (state, layout) => {
    if (layout) state.layout = layout
  },
  changeHeader: (state, header) => {
    if (header) state.header = header
  },
  changeTabsBar: (state, tabsBar) => {
    if (tabsBar) state.tabsBar = tabsBar
  },
  changeCollapse: (state) => {
    state.collapse = !state.collapse
  },
  foldSideBar: (state) => {
    state.collapse = true
  },
  openSideBar: (state) => {
    state.collapse = false
  },
  toggleDevice: (state, device) => {
    state.device = device
  },
  changeLang: (state, lang) => {
    state.lang = lang
  },
}
const actions = {
  changeLayout({ commit }, layout) {
    commit('changeLayout', layout)
  },
  changeHeader({ commit }, header) {
    commit('changeHeader', header)
  },
  changeTabsBar({ commit }, tabsBar) {
    commit('changeTabsBar', tabsBar)
  },
  changeCollapse({ commit }) {
    commit('changeCollapse')
  },
  foldSideBar({ commit }) {
    commit('foldSideBar')
  },
  openSideBar({ commit }) {
    commit('openSideBar')
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  },
  changeLang({ commit }, lang) {
    commit('changeLang', lang)
  },
}
export default { state, getters, mutations, actions }
