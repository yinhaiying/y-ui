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
      type:Array
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
    this.eventBus.$on('update:addSelected',(name) => {
      this.selected.push(name)
      // 更新之后通知子组件
      this.eventBus.$emit('update:selected',this.selected);
      this.$emit('update:selected',this.selected);
    })
    this.eventBus.$on('update:removeSelected',(name) => {
      let index = this.selected.indexOf(name);
      this.selected.splice(index,1);
      this.eventBus.$emit('update:selected',this.selected);
      this.$emit('update:selected',this.selected);
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
