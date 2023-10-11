
## 一 webpack4基本配置

02-1 webpack打包文件内容
  - 自定义执行函数 + {文件路径: 文件内容封装函数moduleFn }
  - 执行webpack_require('入口文件')
    - 执行 moduleFn(module.exports对象, webpack_require)
    - 返回 module.exports对象

02-2 配置webpack打包文件内容


03-1 配置和使用 devServer  <br/>
03-2 配置 HtmlWebpackPlugin模板插件  <br/>

04-1 style-loader和css-loader使用，以支持在JS里引入 css/less等样式文件

05-1 使用miniCssExtactPlugin抽离出css等样式文件 <br/>
05-2 利用postcss配置自动前缀
05-3 配置optimizeCss压缩css 和 UglifyJsPlugin压缩JS (注意仅在mode:production下生效)


06-1 配置babel-loader转译js: 主要单独引入API和方法插件 && 排除nodule_modules文件

07-配置eslint-loader来 检测js规范: 需要注意使用 pre类型的loader


08-1 配置expose-loader暴露全局变量: 需要配合import $ from jquery使用 <br/>
08-2 使用 webpack.ProvidePlugin 在每个模块中都注入$: 不需要配合import $ <br/>
08-3 配置 externals来支持 声明文件被外部引用不用打包，不参与打包流程  <br/>