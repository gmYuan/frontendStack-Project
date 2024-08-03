## 前端工程化- 在Vue低版本项目升级配置



Q1 如何在Vue低版本项目升级配置

A: 

具体实现代码，参见 [P2.1-vue2Elm](todo)
  
1 下载项目 并安装package.json里的依赖

2 分析npm scripts里的脚本命令: 
  - "dev": "cross-env NODE_ENV=online node build/dev-server.js"

------------------------------------------------------------------
Q2: 如何创建 基本express项目

A:

具体实现代码，参见 [P2.2-express-demo1](todo)

1 创建服务 

2 创建拦截路由/路由中间件
  - a.1: 全局中间件；路由中间件； 前置/后置中间件
  - a.2: 异常中间件 

3 监听端口启动服务




## 拓展问题答疑

1 cross-env NODE_ENV=online 和 process.env.NODE_ENV是什么含义，有什么作用

2 vue-cli在本地开发模式下，为什么采用express启动静态资源服务器

3 HTTPS的创建流程

4 webpack-dev-middleware的作用和执行流程