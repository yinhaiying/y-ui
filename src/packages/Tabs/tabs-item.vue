<template>
  <div class = "y-tabs-item" @click = "xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-item',
  inject:['eventBus'],
  props:{
    name:{
      type:String,
      required:true
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name) => {
      console.log('selected:' + name)
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style>

</style>
