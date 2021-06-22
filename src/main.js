import Vue from "vue"; // 引入vue
import App from "./App.vue"; // 引入组件App
console.log(App);
new Vue ({
  el: '#app', // 挂载到index.html中的#app上
  render: h => h (App) // 用App.vue渲染
})