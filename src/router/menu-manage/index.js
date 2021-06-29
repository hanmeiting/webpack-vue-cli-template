const MENU_MANAGE = () => import('@/views/menu-manage/index.vue');

export default [{
  path: '/menu-manage',
  name: 'menuManage',
  component: MENU_MANAGE,
  icon: 'menu',
  meta: {
    title: '菜单管理',
    index: 'index-menu',
    breadcrumb: '菜单管理',
  }
}]