/**
 * @description 导出默认网路配置
 **/
const network = {
  // 默认的接口地址
  baseURL: process.env.VUE_APP_BASE_URL,
  //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  //最长请求时间
  requestTimeout: 600000,
  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],
  //登录失效code
  invalidCode: 403,
  //无权限code
  noPermissionCode: 401,
}
module.exports = network
