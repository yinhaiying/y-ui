<template>
  <div class = "y-tabs" :class = "tabClass">
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
    },
    type:{
      type:String
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus,
      type:this.type
    }
  },
  mounted(){
    // 初始化的时候必须在mounted里面执行。确保子组件中的$on监听都绑定上了。
    this.$children.forEach((vm) => {
      if(vm.$options.name === 'y-tabs-nav'){
        vm.$children.forEach((child) => {
          if(child.$options.name === 'y-tabs-item' && child.name === this.selected ){
            // eventBus是另外通过new Vue的可以生成用来通信的。但是无法在这个上面$emit然后进行接收。
            this.eventBus.$emit('update:selected',{
              name:this.selected,
              vm:child,
            });
          }
        })
      }
    })
  },
  created(){
    // 这里监听事件是为了向外面暴漏click事件
    this.eventBus.$on('update:selected',({name,vm}) => {
      this.$emit('click',this)
    });
  },
  computed:{
    tabClass(){
      return {
        "y-tab--type":this.type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.y-tabs{
  // border:1px solid #ebebeb;
}
</style>
