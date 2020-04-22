<template>
  <div class = "y-tabs-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-content',
  inject:['eventBus'],
  created(){
  }
}
</script>

<style>

</style>
