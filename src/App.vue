<template>
  <div id="app">
    <y-button type = "primary">基本按钮</y-button>
    <y-button type = "info">信息按钮</y-button>
    <y-button type = "success">成功按钮</y-button>
    <y-button type = "warning">警告按钮</y-button>
    <y-button type = "danger">危险按钮</y-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
