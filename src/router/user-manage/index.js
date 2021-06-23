const USER_MANAGE = () => import('../../views/user-manage/index.vue');

export default [{
  path: '/user-manage',
  name: 'userManage',
  component: USER_MANAGE,
  icon: 'user',
  meta: {
    title: '用户管理',
    index: 'index-user',
    breadcrumb: '用户管理',
  }
}]