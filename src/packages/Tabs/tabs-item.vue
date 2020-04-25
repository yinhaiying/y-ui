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
      return {
        "is-active":this.active,
        "y-tabs-item--type":this.type
      }
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
  &--type{
    border:1px solid #e4e7ed;
    &:not(:first-child):not(:last-child){
      margin-left:-1px;
    }
  }
}
</style>
