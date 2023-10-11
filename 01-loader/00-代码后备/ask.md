## 包管理
- npm 最干净 最快
- cnpm 快，但是会打断目录结构 
- yarn 
- pnpm 目前最先进最快的


jialingling
readfile方法可以不bind(fs)吗 可以
爱吃橘子
result.resourceBuffer.toString() 
爱吃橘子
是将buffer转化为js内容吗 

resourceBuffer 存的是二进制的字节
可以通过toString转成字符串

```js
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

15:08
123
有个前后loader 顺序就可以了 为啥还有个中间的 有个中间就算了还要有个inline 为啥呢

其实从设计之初

三种就够
一种普通 
一种优针级比普通高的
一种是比普通低的

inline有非常特殊而重要的作用 style-loader的时候

爱吃橘子
为啥inlineLoader不放在rules里 

行内和行外
行内是写在require里的
写在rules行外

123撤回了一条消息
奋斗ing
inlineLoader是针对某一个模块吗 
123
后置内联 正常 前置 


15:15
爱吃橘子
1 
袖珍汤锅
之前 amd 规范就有 css!./a.css 这种写法 
袖珍汤锅
在 js 中引入 css 文件 



如果其中任何一个 pitching loader 返回了值就相当于在它以及它右边的 loader 已经执行完毕

```js
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

```js
inline-loader1
post-loader2
post-loader1
null
result_b//inline-loader1//post-loader2//post-loader1
null
```

```js
post-loader1-pitch
post-loader2-pitch
inline-loader1-pitch
inline-loader2-pitch
normal-loader1-pitch
normal-loader2-pitch
pre-loader1-pitch
pre-loader2-pitch
pre-loader2
pre-loader1
normal-loader2
normal-loader1
inline-loader2
inline-loader1
post-loader2
post-loader1
null
console.log('index');//pre-loader2//pre-loader1//normal-loader2//normal-loader1//inline-loader2//inline-loader1//post-loader2//post-loader1
console.log('index');
```

pitch既然会阻断后面文件的读取，那还要的有什么作用 

马上会讲案例
123撤回了一条消息



123撤回了一条消息
北极那企鹅丶
不return 只处理逻辑应该可以用pitch吧 
如果你加载的模块是一个虚拟模块，硬盘上根本没有这个文件
pitch
123
这些loader 在执行之前先排好顺序 
所以不管如何写只要定义好了loader的类型一定是按照这个顺序打印的 
是的

丁浩宇
loader的查找顺序，不是Babel的查找顺序 
loader的查找过程和找一个普通 的node.js模块查找方式是一样
./xx
yyy
moules  是先查找这个目录下的同名文件，找不到，再找node_modules 下的第三方 
是
123
这个loader 执行也是需要require  所以文件名和 插件名是一样的 
是的


北极那企鹅丶
webpack/loader-utils
webpack/schema-utils 
丁浩宇
这个this是webpack提供的吧 
123
拿来的vt 
123
这个地方不需要异步吧 只有读文件的时候是异步？ 
123
这个async 也是内置的？ 
北极那企鹅丶
能打印下this嘛，看下里面都有啥 
北极那企鹅丶
不能直接使用this.callback嘛 
如果直接 使用this.callback



16:21
奋斗ing
没有结果 
123
为啥 es5 转es6 是异步的呢？ 
可以是异步，也可以同步
fs.readFile
fs.readFileAsync

123
走了一堆插件而已啊 
丁浩宇
兼容处理 

css-loader是来处理 import 和 url



lgx
不用行内会死循环 
jialingling
使用pitch的实现跟第一次不用pitch的区别是不是为了方便读取各种导出类型的css文件？



当你想把两个返回commonjs代码的loader 级联使用，就需要pitch和!!


为啥这会儿的\n  能正常解析了呢 


this。context 是 啥？
指的是当前加载的模块所在的目录，它并不是根目录，而是当前模块所在的目录 
17:14
123
今天上午说 系统读物文件 左右/ 都无所谓啊，蒙了 
123
如果用来通过fs 模块读文件，是无所谓的
但是如果用来计算相对路径就不行了

123
原来文本里也有 
北极那企鹅丶
原来是纯字符串，现在是js代码 
北极那企鹅丶
js会解析换行符 

lgx
这个模块怎么胜场的 
丁浩宇
8点继续 
会议用户619087
为啥不用行内会死循环啊 
lgx
生成 





xxxx
less 变 css 也是 ast 吗 
是的
北极那企鹅丶
不用行内是因为rule里面有style-loader，会再次调用，
然后style-loader的pitch会再次require内联loader 
是的
奋斗ing


less文件里引入less文件
import语句的话，我们的less就直接处理了

css文件里import进来的less文件不走less-loader吗 
崔
正常项目中可以直接require('!!xxx-loader!file')吗 
可以的
爱吃橘子
看less.loader的callback传怎样的参数吧 
张仁阳
第8章: 实现css-loader 
丁浩宇
node.arguments[0] = types.stringLiteral(depModuleId); 
张仁阳
https://www.javascriptpeixun.cn/my/course/3581 
爱吃橘子


import  xx from 'xxx';

丁浩宇
这样写的话，node.arguments[0] 的值只有type和value，其他的字段就没有了，这样不好吧 
node.arguments[0] = types.stringLiteral(depModuleId); 
{value:depModuleId,raw:depModuleId}

20:16
shine
传context是什么情况才有？
如果你希望给所有 的loader传递一些参数的时候 
20:23
123
每个loader 上都会有自己的callback 
马上会讲，并不是每个loader有自己的callback
每个loader在执行的时候会动态创建自己callback
爱吃橘子
resource是指类似less.css吗 的 就是你要引入的模块 index.css index.less
爱吃橘子
有 
奋斗ing
request打印看一下 
loader1.js!loader2.js!loader3.js!index.less
Anne
69行之后，为什么不需要concat? 
难忘记nice
data 只可以当前loader的normal和pitch才可以取到吗 
按理说是的




1 
123
所有的loader 用的一个context 
是的
丁浩宇
我的意思是node.arguments[0] = types.stringLiteral(depModuleId);这样赋值的话，会丢失其他的属性，为什么不直接node.arguments[0] .value= depModuleId不是更好吗 
因为它没有其它属性了
为什么我们不复用老节点呢？有可能老节点的其它属性就是错的

123
但是this。async 不是注册一个callback ？ 
马上讲
shine
就相当于 我们定义的loader被拼接成一个字符串参数 是的
123
当前的也不要加 

currentRequest是需要添加resource

水星
Loader 完了，callback会把自己的数据传给下一个 
