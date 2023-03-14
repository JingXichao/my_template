
# 安装依赖
npm i
# 本地开发 启动项目
npm run serve
# 测试环境 打包项目
npm run build:preview
# 正式环境 打包项目
npm run build


# 路由配置
```
{
  //当设置 true 的时候该路由不会再侧边栏出现
  hidden: true; // (不写的话默认 false)
  //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  redirect: 'noRedirect';
  //是否显示根节点，如果children只有一个时此项为false，会不显示父级，此项为true会显示父级
  alwaysShow: true;
  //设定路由的名字，首字母大写，一定要填写并且要跟view的name对应不然使用<keep-alive>时会出现各种问题
  name: 'Test';
  meta: {
    //是否固定不允许删除
    affix: true,
    //右侧bage小红框显示的文字内容
    badge: "Pro",
    // 如果设置为true，则不会在breadcrumb面包屑中显示
    breadcrumbHide: false,
    //设置该路由进入的权限，支持多个权限叠加
    permissions: ['admin', 'editor', 'test'];
    //设置该路由在侧边栏和面包屑中展示的名字
    title: 'title';
    //设置该路由的图标
    icon: '';
    //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    noKeepAlive: true,
  }
}
```
# 使用注意事项
```
1. 项目默认使用lf换行符而非crlf换行符，新建文件时请注意选择文件换行符
2. 项目默认使用的最严格的eslint校验规范（plugin:vue/recommended），使用之前建议配置开发工具实现自动修复（建议使用vscode开发）
```