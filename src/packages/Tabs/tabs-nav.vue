<template>
  <div class = "y-tabs-nav">
    <div class="y-tabs__active-bar"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-nav',
  inject:['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(name) => {
      this.active = this.name === name;
    })
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
    left:0;
    bottom:0;
    width:100px;
    height:2px;
    background-color:#409eff;
    z-index:2;
  }
}
</style>
