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
    },
    autoPlay:{
      type:Boolean,
      default:true
    },
    interval:{
      type:Number,
      default:2000
    },
    reverse:{
      type:Boolean,
      default:false
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
    this.autoPlayHandle();
  },
  methods:{
    updateChildren(){
      this.$children.forEach((vm,index) => {
        vm.reverse = this.reverse;
        if(index === this.activeIndex){
          vm.visible = true;
        }else{
          vm.visible = false;
        }
      })
    },
    play(){
        if(!this.reverse){
          this.activeIndex += 1;
          if(this.activeIndex === this.$children.length){
              this.activeIndex = 0;
          }
        }else{
          this.activeIndex -= 1;
          if(this.activeIndex === -1){
            this.activeIndex = this.$children.length-1;
          }
        }
        this.updateChildren();
    },
    autoPlayHandle(){
      this.timer = setInterval(() => {
       this.play();
      },this.interval)
    },
    clear(){
      clearInterval(this.timer);
    }
  },
  beforeDestroy(){
    this.clear();
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