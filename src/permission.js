/**

 * @description 路由守卫，目前两种模式：all模式与intelligence模式
 */
import router from '@/router'
import store from '@/store'
import Progress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  authentication,
  loginInterception,
  progressBar,
  recordRoute,
  routesWhiteList,
} from '@/config'

Progress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
})
router.beforeResolve(async (to, from, next) => {
  if (progressBar) Progress.start()
  let hasToken = store.getters['user/accessToken']

  if (!loginInterception) hasToken = true

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      if (progressBar) Progress.done()
    } else {
      const hasPermissions =
        store.getters['user/permissions'] &&
        store.getters['user/permissions'].length > 0
      if (hasPermissions) {
        next()
      } else {
        try {
          let permissions = []
          if (loginInterception) {
            //settings.js loginInterception为false时，创建虚拟权限
            await store.dispatch('user/setPermissions', ['admin'])
            permissions = ['admin']
          } else {
            permissions = await store.dispatch('user/getUserInfo')
          }

          let accessRoutes = []
          if (authentication === 'intelligence') {
            accessRoutes = await store.dispatch('routes/setRoutes', permissions)
          } else if (authentication === 'all') {
            accessRoutes = await store.dispatch('routes/setAllRoutes')
          }
          accessRoutes.forEach((element) => {
            router.addRoute(element)
          })
          next({ ...to, replace: true })
        } catch {
          await store.dispatch('user/resetAccessToken')
          if (progressBar) Progress.done()
        }
      }
    }
  } else {
    if (routesWhiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if (recordRoute) {
        next(`/login?redirect=${to.path}`)
      } else {
        next('/login')
      }
      if (progressBar) Progress.done()
    }
  }
})
router.afterEach(() => {
  if (progressBar) Progress.done()
})
