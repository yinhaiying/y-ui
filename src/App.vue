<template>
  <div id="app">
    <!-- <button-example></button-example> -->
    <!-- <icon-example></icon-example>   -->
    <message-example></message-example>
  </div>
</template>
<script>
import ButtonExample from './example/button'
import IconExample from './example/icon'
import MessageExample from './example/message'
export default {
  name: 'App',
  components: {
    ButtonExample,
    IconExample,
    MessageExample
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
