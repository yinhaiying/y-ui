<template>
  <div class = "y-tabs-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-nav',
  inject:['eventBus'],
  created(){
    console.log('nav:eventBus');
    console.log(this.eventBus)
  }
}
</script>

<style>

</style>
