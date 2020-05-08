<template>
  <div id="app">
    <!-- <button-example></button-example> -->
    <!-- <icon-example></icon-example>   -->
    <!-- <message-example></message-example> -->
    <!-- <tabs-example></tabs-example> -->
    <!-- <pagination-example></pagination-example> -->
    <!-- <popover-example></popover-example> -->
    <!-- <collapse-example></collapse-example> -->
    <slides-example></slides-example>
  </div>
</template>
<script>
import ButtonExample from './example/button'
import IconExample from './example/icon'
import MessageExample from './example/message'
import TabsExample from './example/tabs'
import PaginationExample from './example/pagination'
import PopoverExample from './example/popover'
import CollapseExample from './example/collapse'
import SlidesExample from './example/slides'
export default {
  name: 'App',
  components: {
    ButtonExample,
    IconExample,
    MessageExample,
    TabsExample,
    PaginationExample,
    PopoverExample,
    CollapseExample,
    SlidesExample
  }
}
</script>

<style lang="scss">
@import "./styles/reset.scss";
#app {
  // width:800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 160px;
  margin-left:300px;
}
</style>
