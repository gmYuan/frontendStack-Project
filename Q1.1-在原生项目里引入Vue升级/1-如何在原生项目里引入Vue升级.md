## 前端工程化- 在原生项目里引入Vue开发


## 一 配置步骤

Q1 如何在原生项目中引入Vue进行开发

A: </br>

其核心 实现思路是: 
  - 安装vue相关依赖
  - 创建依赖实例的 入口文件
  - webpack配置 entry + output + module + plugin
  - 通过 npm scripts 指定执行 不同环境的配置文件

具体实现代码，参见[P1.1-htmlToParcel](todo)


1 实现前提是 该原生项目已配置 Webpack打包相关配置内容，这一步的具体实现，可以参考 [前端工程化- 在原生项目里引入Webpack配置- todo](todo)

2.1 在项目中引入Vue,安装Vue及相关依赖:
  - vue
  - vue-loader4
  - vue-template-compiler
  - @vue/compiler-sfc

2.2 创建Vue的入口文件: 
  - JS入口文件 main.js:  创建Vue的 根vm实例，挂载到#app的 dom节点下
  - vue入口文件 App.vue: 创建Vue的根组件，一般配合`<router-view>`一起使用，来渲染不同子组件内容
  - HTML入口文件 public/index.html: 提供 #app挂载dom节点

3 配置webpck.vue.config.js，包括:
  - entry:  一般是配置 main.js作为 所有JS的打包入口文件
  - output: 配置 打包结果dist
  - module: 配置 vue-loader解析.vue文件
  - plugin: 
    - 配置 HtmlWebpackPlugin里的 所有HTML的打包入口文件
    - 配置 VueLoaderPlugin

  - devServer: 本地开发环境配置

4 配置npm scripts命令:
  - npm run build==> 用于指定开发/打包时，应该使用 哪一个webpack配置文件


--------------------------------------------------------------------
Q2: 如何实现在原生项目中，使用Vue进行SPA配置开发

A: <br/>

1 SPA是指 整个项目只有一个 HTML页面，所有页面内容都是在这一个HTML宿主里 变化渲染的

2.1 通过 vue-router + App.vue实现页面的内容 更换渲染
  - 向Vue里注册 vue-router + 创建 vue-router实例 + 配置routes(路由和渲染组件的 映射关系)
  - 在 main.js入口文件里，向 vue实例传入router实例 + 挂载 vue实例

2.2 APP作为vue入口文件，一般要负责
  - 子组件的引入
  - 一般需要配合Vue-Router的 `<router-view />` 使用

3 子组件的开发，根据template/script/style 进行模块化开发

4 页面间的跳转，通过this.$router上的方法 来实现


------------------------------------------------------------------------
Q3: 如何实现在原生项目中，使用Vue进行MPA配置开发

A: <br/>

其核心 实现思路是: 
  - 多个作为entry的 vue实例文件，即每个页面都会创建一个单独的 vue实例
  - webpack 配置多个模板输出 output文件，从而生成多个 单独页面
  - 通过 npm scripts 指定执行 不同环境的配置文件


1 为什么需要有MPA开发:
  - 因为SPA在打包后只会生成一个html页面，不利于SEO
  - 所以通过多页面开发MPA,生成多页html文件，从而实现SEO优化

2 如何配置 MPA开发:
  
S1 创建多个entryJS文件
  - 每个enrtyJS文件内部，都会创建 新的Vue实例，作为Vue的 入口JS文件

S2 在webpack配置文件里，配置多个入口文件
  - 配置多个 eneryJS入口文件: 从而生成多个dist/xxxjs文件，分别被不同的 打包html页面引用
  - 配置多个模板输出（其源模板可以都是 public/index.html），从而生成多个打包的html文件

S3 创建npm scripts命令，用于开发和打包

S4 多个页面之间的跳转 也不能用router.push，而是通过网页之间的loaction跳转方法
 

------------------------------------------------------------------------
Q4: 如何实现在原生项目中，把Vue2 升级为Vue3 进行开发

A: <br/>

1 升级package.json里的 Vue及相关依赖:
  - vue升级到 3.0.0以上
  - vue-router升级到 4.0.0以上
  - vue-loader升级到 16.0.0以上
  - @vue/compiler-sfc; vue-template-compiler版本无需变化

2 更新webpack里 VueLoaderPlugin的 引入方式

3 创建npm scripts命令，用于更新 开发和打包对应 使用的webpack配置文件

4 更新 实例创建语法
  - 更新 vue实例创建写法: createApp(App).use().mount()
  - 更新 vue-router实例 创建写法: createRouter()
  - 在组件内部，使用 vue3新特性语法


# 二 拓展问题答疑

Q1 vue-loader是什么，有什么作用






@vue/compiler-sfc; vue-template-compiler; 什么，有怎么作用












2 vueLoaderPlugin是什么作用，为什么需要引入和实例化

3 -D; -S有什么区别和作用

4 devserver里的 static/ compress/ port/ hot的参数含义 ==> 配合项目webpack配置方案

5 HtmlWebpackPlugin的 tempalte/ filename/ chunks含义

6 VueLoaderPlugin有什么作用

7 npm scripts的运行原理； 对应的 webpack/ webpack-dev-server 的原理是什么

8 optimizaiton里的 minimize/ minimizer 的含义和作用

9 vue.use(xxx) 含义和作用

10 new vue({render, router}) 里的参数作用

11 package.json里的 各个版本号含义

12 package.lock的含义 和 作用

13 createApp(App).use().mount()的作用

14 createRouter({}) 参数含义