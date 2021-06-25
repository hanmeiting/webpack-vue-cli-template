var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import Vue from "vue"; // 引入vue
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue"; // 引入组件App
import router from './router/index.js';
Vue.use(ElementUI);

new Vue({
  el: '#app', // 挂载到index.html中的#app上
  router,
  render: function (h) {
    _newArrowCheck(this, _this);

    return h(App);
  }.bind(this) // 用App.vue渲染
});

const arr = [12, 3, 4];
console.log(...arr);

const fn = function () {
  _newArrowCheck(this, _this);

  console.log(111);
}.bind(this);
