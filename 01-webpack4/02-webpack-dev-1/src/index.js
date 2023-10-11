import './index.css';

require('./index.less');

let aContent = require('./a.js');
console.log('我是index入口内容')

console.log('aContent内容是', ' aaa==>' + aContent);

// 转译ES6语法
let fn = () =>{
  console.log('我是箭头函数，需要被转译')
}
fn();

// 转译ES6 属性方法
@log
class A{  // new A() a = 1
  a = 1;
}

let a = new A();
console.log(a.a);

function log(target) {
  console.log('log装饰器是', target);
}

// 配置第三方公用库的方法
// 1 expose-loader 暴漏到window上:   全局的loader/ 内联的loader
// 2 providePlugin 给每个模块中都注入 $对象
// 3 引入不打包

console.log('---------------------')
// import $ from 'expose-loader?$!jquery'  //使用内联的expose-loader

import $ from 'jquery'; 
console.log('全局对象上的 JQuery/$是', window.$);
console.log('每个模块内的 JQuery/$是', $);

