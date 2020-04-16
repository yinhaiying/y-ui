<template>
  <div id="app">
    <button-example></button-example>
  </div>
</template>
<script>
import ButtonExample from './example/button'
export default {
  name: 'App',
  components: {
    ButtonExample
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
