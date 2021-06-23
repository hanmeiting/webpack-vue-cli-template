import Vue from "vue"; // 引入vue
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const LAYOUT = () => import('../layout/index.vue');
import USER_MANAGE_LISTS from './user-manage';
import menuManageLists from './menu-manage';
const routes = [{
  path: '/',
  name: 'index',
  component: LAYOUT,
  meta: {
    title: '首页',
    index: 'index-main',
    breadcrumb: '首页',
    keepAlive: true
  },
  children: [
    ...USER_MANAGE_LISTS,
    ...menuManageLists
  ]
}]

const router = new VueRouter({ routes });
export default router;