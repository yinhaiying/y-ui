<template>
  <div class = "y-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'y-tabs',
  props:{
    selected:{
      type:String,
      required:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        if(!['horizontal','vertical'].includes(value)){
          throw new Error('nav的方向只能为horizontal或者vertical')
        };
        return true;
      }
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }

  },
  provide(){
    return {
      eventBus:this.eventBus
    }

  },
  created(){
    console.log(this.eventBus)
    // this.$emit('update:selected',$event)
  }
}
</script>

<style>

</style>
