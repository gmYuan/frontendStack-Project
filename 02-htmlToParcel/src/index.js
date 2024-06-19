console.log('我是初始化首页')

// 引入首页依赖的CSS
import './css/public.css'
import './css/index.css'
// 引入登录页依赖的CSS
import './css/login.css'

// 引入首页依赖的JS
import './js/jquery-1.12.4.min'
import './js/public'
import './js/nav'
// 首页的js轮播逻辑，放到了nav里 + flexslider变成在nav里引入npm包了，所以这里不需要在引入
// import './js/jquery.flexslider-min'