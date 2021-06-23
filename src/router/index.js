import Vue from "vue"; // 引入vue
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const LAYOUT = () => import('../layout/index.vue');

const routes = [
  {
    path: '/',
    component: LAYOUT
  }
]

const router = new VueRouter({ routes });
export default router;


