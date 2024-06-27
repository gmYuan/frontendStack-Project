import Vue from 'vue';
import App from '../Home.vue'

const app = new Vue({
  render: h => h(App),
}).$mount('#app')

