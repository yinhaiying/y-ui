<template>
  <div class="y-carousel">
      <div class="container">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:'y-carousel',
  props: {
    initialIndex:{
      type:[Number,String],
      default:0
    }
  },
  data() {
    return {
      activeIndex:0
    };
  },
  watch:{
    initialIndex(newIndex){
      this.activeIndex = newIndex;
      this.updateChildren();
    }
  },
  mounted(){
    this.activeIndex = this.initialIndex;
    this.updateChildren();
  },
  methods:{
    updateChildren(){
      this.$children.forEach((vm,index) => {
        if(index === this.activeIndex){
          vm.visible = true;
        }else{
          vm.visible = false;
        }
      })
    }
  }

};
</script>
<style lang="scss" scoped>
.y-carousel{
  // border:1px solid black;
  display:inline-block;
  .container{
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
  }
}
</style>