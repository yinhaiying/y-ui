<template>
  <div class = "y-tabs-item" @click = "xxx" :class = "classes" ref = "tabsItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-item',
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
    this.eventBus.$on('update:selected',({name,vm}) => {
      this.active = this.name === name;
    });
  },
  computed:{
    classes(){
      return {
        "is-active":this.active
      }
    }
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',{name:this.name,vm:this})
    }
  }
}
</script>

<style lang="scss" scoped>
.y-tabs-item{
  flex-shrink: 0;
  margin:0 20px;
  // box-sizing:border-box;
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
  &.is-active{
    color:#409eff;
  }
}
</style>
