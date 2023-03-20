const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors())

const proxyOption = {
  // 代理跨域目标接口
  target: 'https://demo.com',
  // pathRewrite: {
  //   '^/api/' : '/' // 重写请求，api/解析为/
  // },
  changeOrigin: true,

  // 修改响应头信息，实现跨域并允许带cookie
  onProxyRes: function (proxyRes, req, res) {
    res.header('Access-Control-Allow-Origin', '*')
  },
  // 修改响应信息中的cookie域名
  //  cookieDomainRewrite: ''  // 可以为false，表示不修改
}

//服务器的代理请求地址
app.use('^/base/', createProxyMiddleware(proxyOption))
//app.use('^/passport/', createProxyMiddleware(proxyOption));

app.get('/', (req, res) => {
  res.end(fs.readFileSync('./dist/index.html', 'utf-8'))
})

app.use(express.static('./dist'))

app.listen(8092, () => {
  console.log('server listening on 8092')
})
