<template>
  <div class = "y-tabs-nav">
    <div class="y-tabs__active-bar" :style = "barStyle"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-nav',
  inject:['eventBus'],
  data(){
    return {
      offsetLeft:0,
      width:0
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',({name,vm}) => {
      this.width = vm.$el.getBoundingClientRect().width;
      if(this.$parent.$options.name === 'y-tabs'){
        this.offsetLeft = vm.$el.getBoundingClientRect().left - this.$parent.$el.getBoundingClientRect().left;
      }
    });
  },
  computed:{
    barStyle(){
      console.log(this.width,this.offsetLeft)
      return {
        width:this.width + 'px',
        transform:`translateX(${this.offsetLeft}px)`
      }

    }
  }
}
</script>

<style  scoped lang="scss">
$nav-height:40px;
.y-tabs-nav{
  display:flex;
  height:$nav-height;
  justify-content: flex-start;
  align-items: center;
  position:relative;
  &:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  & > .y-tabs__active-bar{
    position:absolute;
    // left:0;
    bottom:0;
    height:2px;
    background-color:#409eff;
    z-index:2;
    transition:all 300ms;
  }
}
</style>
