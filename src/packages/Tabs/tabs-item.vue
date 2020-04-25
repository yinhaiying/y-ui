<template>
  <div class = "y-tabs-item" @click = "onClick" :class = "classes" ref = "tabsItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-item',
  inject:['eventBus','type'],
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
    this.eventBus.$on('update:selected',({name,vm}) => {
      this.active = this.name === name;
    });
  },
  computed:{
    classes(){
      let classes = [];
      if(this.type){
        classes.push('y-tabs-item--' + this.type)
      }
      if(this.active){
        classes.push("is-active")
      }
      return classes;
    }
  },
  methods:{
    onClick(){
      this.eventBus.$emit('update:selected',{name:this.name,vm:this});
    }
  }
}
</script>

<style lang="scss" scoped>
.y-tabs-item{
  flex-shrink: 0;
  padding:0 20px;
  box-sizing:border-box;
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
  &.is-active{
    color:#409eff;
    border-bottom-color:transparent;
  }
  // 标签选项卡样式
  &--card{
    border-left:1px solid #e4e7ed;
    border-top:1px solid #e4e7ed;
    border-bottom:1px solid #e4e7ed;
    &:last-child{
      border-right:1px solid #e4e7ed;
    }
  }
  // 卡片选项卡样式
  &--border-card{
    border-left:1px solid #e4e7ed;
    border-top:1px solid #e4e7ed;
    border-bottom:1px solid #e4e7ed;
    &:last-child{
      border-right:1px solid #e4e7ed;
    }
    &.is-active{
    background:#fff;
    }

  }
}
</style>
