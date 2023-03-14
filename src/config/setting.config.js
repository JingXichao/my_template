/**
 * @description 导出默认通用配置
 */
const setting = {
  // 开发以及部署时的URL
  publicPath: '/',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: 'DEMO',
  //简写
  abbreviation: 'DEMO',
  //开发环境端口号
  devPort: '82',
  //版本号
  version: process.env.VUE_APP_VERSION,
  //是否显示页面底部自定义版权信息
  footerCopyright: true,
  //是否显示顶部进度条
  progressBar: true,
  //缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  //不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/404', '/401'],
  //加载时显示文字
  loadingText: 'Loading...',
  //token名称
  tokenName: 'accessToken',
  //token存储位置localStorage sessionStorage
  storage: 'localStorage',
  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,
  //是否开启登录拦截
  loginInterception: false,
  //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: 'intelligence',
  //vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,
  //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ['/'],
  //需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  //npm run build时是否自动生成7z压缩包
  build7z: false,
  //消息框消失时间
  messageDuration: 3000,
  //默认语言
  defaultLang: 'zh_CN',
  //浏览器存储key
  localKey: {
    //当前语言
    lang: 'system.lang',
    //token在localStorage、sessionStorage存储的key的名称
    token: 'system.token',
    //主题配置
    theme: 'system.theme',
  },
}
module.exports = setting
