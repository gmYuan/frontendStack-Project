// 1. 创建服务
const express = require('express')
const app = express()

// 2. 拦截路由
app.get('/', (req, res) => {
  res.send('<html><body><div style="color: red;">首页</div></body></html>')
})

// 3. 监听端口启动服务
const port = 8080
app.listen(port, () => {
  console.log(`服务启动成功，端口号${port}监听中...`)
})