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
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected);
    this.eventBus.$on('update:addSelected',(name) => {
      // 更新之后通知子组件
      let selectedArr = JSON.parse(JSON.stringify(this.selected));
      if(this.accordion){
          selectedArr = [name]
      }else{
        selectedArr.push(name);
      }
      this.eventBus.$emit('update:selected',selectedArr);
      this.$emit('update:selected',selectedArr);
    })
    this.eventBus.$on('update:removeSelected',(name) => {
      let selectedArr = JSON.parse(JSON.stringify(this.selected));
      let index = this.selected.indexOf(name);
      selectedArr.splice(index,1);
      // 删除之后通知子组件。
      this.eventBus.$emit('update:selected',selectedArr);
      this.$emit('update:selected',selectedArr);
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
