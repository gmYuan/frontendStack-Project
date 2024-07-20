console.log('我是初始化首页')

// 引入首页依赖的CSS
import './css/public.css'
import './css/index.css'


// 引入首页依赖的JS
import 'jquery'
import './js/public'
import './js/nav'
// 首页的js轮播逻辑，放到了nav里 + flexslider变成在nav里引入npm包了，所以这里不需要在引入
// import './js/jquery.flexslider-min'

// 测试treeTraking
// import { get } from 'lodash-es'
// console.log( get({ a: 1 }, 'a') )

// 测试分包构建
import { get } from 'lodash-es'
console.log( get({ a: 1 }, 'a') )