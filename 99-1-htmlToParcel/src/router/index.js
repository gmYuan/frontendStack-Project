import Vue from "vue";
import Router from "vue-router";
import Home from '../Home.vue'
import Login from '../Login.vue'

// 注册 router-link; router-view 全局组件
// 注入 this.$router; this.$route 实例属性
Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
  ],
});

export default router;
