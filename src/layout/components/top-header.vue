<template>
  <el-header style="text-align: right; font-size: 12px" class="header">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px 0 0;
  border-bottom: 1px solid #ddd;
}
</style>