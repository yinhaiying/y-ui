<template>
  <div class = "y-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-pane',
  inject:['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(name) => {
      console.log('selected:' + name)
    })
  }
}
</script>

<style>

</style>
