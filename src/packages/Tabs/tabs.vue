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
  mounted(){
    // 初始化的时候必须在mounted里面执行。确保子组件中的$on监听都绑定上了。
    this.$children.forEach((vm) => {
      if(vm.$options.name === 'y-tabs-nav'){
        vm.$children.forEach((child) => {
          if(child.$options.name === 'y-tabs-item' && child.name === this.selected ){
            this.eventBus.$emit('update:selected',{name:this.selected,vm:child})
          }
        })
      }
    })

  }
}
</script>

<style lang="scss" scoped>
.y-tabs{
  border:1px solid #ebebeb;
  // box-sizing: border-box;
}
</style>
