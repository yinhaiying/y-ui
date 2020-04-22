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
    this.eventBus.$on('update:selected',(name) => {
      this.active = this.name === name;
    })
  }
}
</script>

<style  scoped lang = "scss">
$nav-height:40px;
.y-tabs-nav{
  display:flex;
  height:$nav-height;
  justify-content: flex-start;
  align-items: center;
  border:1px solid red;
}
</style>
