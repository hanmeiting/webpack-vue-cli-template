<template>
  <div class="layout">
    <slider-nav></slider-nav>
    <el-container class="container">
      <top-header></top-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SliderNav from "./components/slider-nav.vue";
import TopHeader from "./components/top-header.vue";
export default {
  name: "layout",
  components: {
    SliderNav,
    TopHeader,
  }
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  .container {
    flex-direction: column;
  }
}
</style>