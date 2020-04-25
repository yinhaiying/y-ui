<template>
  <div id="app">
    <!-- <button-example></button-example> -->
    <!-- <icon-example></icon-example>   -->
    <!-- <message-example></message-example> -->
    <tabs-example></tabs-example>
  </div>
</template>
<script>
import ButtonExample from './example/button'
import IconExample from './example/icon'
import MessageExample from './example/message'
import TabsExample from './example/tabs'
export default {
  name: 'App',
  components: {
    ButtonExample,
    IconExample,
    MessageExample,
    TabsExample
  }
}
</script>

<style lang="scss">
@import "./styles/reset.scss";
#app {
  width:800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 160px;
  margin-left:300px;
}
</style>
