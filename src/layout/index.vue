<template>
  <div class="layout">
    <slider-nav></slider-nav>
    <el-main>
      <top-header></top-header>
    </el-main>
  </div>
</template>

<script>
import SliderNav from './components/slider-nav.vue'
import TopHeader from './components/top-header.vue'
export default {
  name: 'layout',
  components: {
    SliderNav,
    TopHeader
  }
}
</script>

<style lang="less" scoped>
.layout{
  display: flex;
}
</style>