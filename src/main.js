import Vue from "vue"; // 引入vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue"; // 引入组件App
import router from './router/index.js'
Vue.use(ElementUI);

new Vue ({
  el: '#app', // 挂载到index.html中的#app上
  router,
  render: h => h (App) // 用App.vue渲染
})