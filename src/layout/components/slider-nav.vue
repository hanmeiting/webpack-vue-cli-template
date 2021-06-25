<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo slider-nav"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
  >
    <template v-for="(route, key) in routes">
      <el-submenu :index="route.meta.index" :key="key" v-if="route.children">
        <template slot="title">
          <i :class="`el-icon-${route.icon}`"></i>
          <span>{{route.meta.title}}</span>
        </template>
        <el-menu-item
          v-for="(childrenRoute, childrenKey) in route.children"
          :key="childrenKey"
          :index="childrenRoute.meta.index"
          :route="{ name: childrenRoute.name }"
        >
          <span slot="title">{{childrenRoute.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item :index="route.meta.index" :route="{ name: route.name}" :key="key" v-else>
        <i :class="`el-icon-${route.icon}`"></i>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: "sliderNav",
  computed: {
    routes() {
      console.log(this.$router.options.routes[0].children);
      return this.$router.options.routes[0].children;
    }
  }
};
</script>

<style lang="less" scoped>
.slider-nav {
  width: 200px;
  height: 100vh;
}
</style>