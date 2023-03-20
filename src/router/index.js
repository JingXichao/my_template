/**
 * @copyright
 * @description router全局配置，如有必要可分文件抽离
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "chunk-login" */ '@/views/login/index'),
    hidden: true,
  },
  {
    path: '/register',
    component: () =>
      import(/* webpackChunkName: "chunk-register" */ '@/views/register/index'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import(/* webpackChunkName: "chunk-401" */ '@/views/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "chunk-404" */ '@/views/404'),
    hidden: true,
  },
]

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    alwaysShow: false,
    children: [
      {
        path: 'home',
        name: 'Home',
        hidden: true,
        component: () =>
          import(/* webpackChunkName: "chunk-home" */ '@/views/home/index'),
        meta: {
          title: 'Home',
          breadcrumbHide: true,
          affix: true,
          noKeepAlive: true,
        },
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "chunk-dashboard" */ '@/views/dashboard/index'
          ),
        meta: {
          title: 'menu.dashboard',
          icon: 'dashboard-3-fill',
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'Components',
      icon: 'dashboard-3-fill',
      noKeepAlive: true,
    },
    children: [
      {
        path: 'remixIcons',
        name: 'RemixIcon',
        component: () =>
          import(
            /* webpackChunkName: "chunk-login" */ '@/views/remixIcon/index'
          ),
        meta: {
          title: 'Remix Icons',
          icon: 'emotion-normal-fill',
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  base: routerMode === 'history' ? publicPath : '',
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
})
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
/* const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
}; */

export function resetRouter() {
  router.matcher = new VueRouter({
    base: routerMode === 'history' ? publicPath : '',
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher
}

export default router
