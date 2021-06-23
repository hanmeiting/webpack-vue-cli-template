<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// https://blog.csdn.net/weixin_34407348/article/details/88600075
export default {
  data() {
    return {
      key: 'value'
    }
  },
}
</script>

<style lang="less">
html, body{
  margin: 0;
  padding: 0;
}
</style>