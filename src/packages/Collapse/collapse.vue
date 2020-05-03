<template>
  <div class="y-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'y-collapse',
  data(){
    return {
      eventBus:new Vue()
    }
  },
  props:{
    accordion:{
      type:Boolean,
      default:false
    },
    selected:{
      type:String
    }
  },
  provide(){
    return {
      eventBus:this.eventBus,
      accordion:this.accordion
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected);
    this.eventBus.$on('update:selected',(name) => {
      console.log(name)
      this.$emit('update:selected',name);
    })
  }
}
</script>

<style lang="scss" scoped>
.y-collapse{
  border:1px solid #ddd;
  border-radius:4px;
}
</style>
