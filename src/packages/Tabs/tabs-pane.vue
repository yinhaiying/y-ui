<template>
  <div class = "y-tabs-pane" :class = "classes" v-if = "active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-pane',
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },
  props:{
    name:{
      type:String,
      required:true
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name) => {
      this.active = this.name === name;
    })
  },
  computed:{
    classes(){
      return {
        "is-active":this.active
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.y-tabs-pane{
  min-height:50px;
  &.is-active{

  }
}
</style>
