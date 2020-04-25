<template>
  <div class = "y-tabs-nav" :class = "navClass">
    <div class="y-tabs__active-bar" :style = "barStyle" ></div>
    <slot></slot>
    <div class = "y-tabs-nav__extra">
      <slot name = "extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'y-tabs-nav',
  inject:['eventBus','type'],
  data(){
    return {
      offsetLeft:0,
      width:0,
      padding:{}
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',({name,vm}) => {
      this.padding.paddingLeft =  parseInt(window.getComputedStyle(vm.$el).paddingLeft);
      this.padding.paddingRight =  parseInt(window.getComputedStyle(vm.$el).paddingRight);
      this.width = vm.$el.getBoundingClientRect().width - this.padding.paddingLeft - this.padding.paddingRight ;
      if(this.$parent.$options.name === 'y-tabs'){
        this.offsetLeft = vm.$el.getBoundingClientRect().left - this.$parent.$el.getBoundingClientRect().left;
      }
    });
  },
  computed:{
    barStyle(){
      return {
        width:this.width + 'px',
        transform:`translateX(${this.offsetLeft}px)`,
        marginLeft:this.padding.paddingLeft + 'px',
        marginRight:this.padding.paddingRight + 'px',
      }
    },
    navClass(){
      let classes = [];
      if(this.type){
        classes.push('y-tabs-nav--' + this.type)
      }
      return classes;
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
  // 标签选项卡样式
  &--card{
    & > .y-tabs__active-bar{
      display:none;
    }
    &:after{
      height:0 !important;
    }
  }
  // 卡片选项卡样式
  &--border-card{
    background:#F5F7FA;
    & > .y-tabs__active-bar{
      display:none;
    }
    &:after{
      height:0 !important;
    }
  }
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
    box-sizing: border-box;
  }
  &__extra{
    margin-left:auto;
    margin-right:10px;
    display:flex;
    justify-content:center;
    align-items: center;
  }
}
</style>
