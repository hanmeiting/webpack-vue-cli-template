const USER_MANAGE = () => import('@/views/user-manage/index.vue');
const USER_MANAGE_LIST = () => import('@/views/user-manage/user-list.vue');

export default [{
  path: '/user-manage',
  name: 'userManage',
  component: USER_MANAGE,
  icon: 'user',
  meta: {
    title: '用户管理',
    index: 'index-user',
    breadcrumb: '用户管理',
  },
  redirect: '/user-manage/list',
  children: [
    {
      path: 'list',
      name: 'userManageList',
      component: USER_MANAGE_LIST,
      meta: {
        title: '用户列表',
        index: 'index-user-list',
        breadcrumb: '用户列表',
      },
    }
  ]
}]