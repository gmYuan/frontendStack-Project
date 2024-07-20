// 1. 创建服务
const express = require("express");
const app = express();

// 4. 中间件：处理请求的业务逻辑
// 4.1 前置中间件
// 4.1 全局中间件: 中间件第一个参数为回调函数时，则针对所有请求生效
// app.use(function (req, res, next) {
//   console.log("before middleware");
//   next();
// });

// 4.2 路由中间件:第一个参数为匹配路由，第二个参数为回调函数
app.use("/test", function (req, res, next) {
  res.send("处理 test请求");
  next();
});

// 6 同构部署
app.use("/static", express.static("./static"));

// 2. 拦截路由/路由中间件
app.get("/", (req, res, next) => {
  res.send('<html><body><div style="color: red;">首页</div></body></html>');

  // throw new Error("我是错误1，可以被 异常中间件捕获");
  Promise.resolve().then(() => {
    throw new Error("我是错误2，可以被 promise异常监听 捕获");
  });
  next();
});

// 5.3 全局异常捕获
process.on("uncaughtException", function (err) {
  console.error("全局异常监听----", err.message);
});

// 5.1 异常中间件: 回调函数包含了4个参数
// 注意事项:
// 1.异常中间件 全局只包含一个
// 2.异常中间件 可以传递给普通中间件
// 3.异常中间件 需要放在所有中间件的最后，否则在它以后出现的报错无法被捕获
// 4.异常中间件 只能捕获 回调函数中的异常， 无法捕获回调函数里 promise的报错
app.use(function (err, req, res, next) {
  console.error("异常中间件监听----", err.message);
  next();
});

// 5.2 全局promise异常捕获
process.on("unhandledRejection", function (err) {
  console.error("全局promise异常监听----", err.message);
});

// 3. 监听端口启动服务
const port = 8080;
app.listen(port, () => {
  console.log(`服务启动成功，端口号${port}监听中...`);
});
