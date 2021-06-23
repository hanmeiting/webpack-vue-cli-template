<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo slider-nav"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
  >
    <el-submenu index="index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>首页</span>
      </template>
      <el-menu-item index="index-user" :route="{ name: 'userManage' }">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="index-menu" :route="{ name: 'menuManage' }">
        <i class="el-icon-document"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "sliderNav",
};
</script>

<style lang="less" scoped>
.slider-nav {
  width: 200px;
  height: 100vh;
}
</style>