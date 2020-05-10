<template>
  <div class="y-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseleave">
      <div class="y-carousel-container">
        <slot></slot>
      </div>
      <div class="y-carousel-dot">
        <span v-for = "n in childrenLength" :key = "n" @click = "onIndicatorSelect(n-1)">{{n-1}}</span>
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
      activeIndex:0,
      childrenLength:0,
      lastIndex:undefined,
      timer:null
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
    this.childrenLength = this.$children.length;
    this.updateChildren(this.reverse);
    this.autoPlayHandle();
  },
  methods:{
    updateChildren(reverse){
      this.$children.forEach((vm,index) => {
        vm.reverse = reverse;
        // 确保每个元素的reverse渲染完成
        this.$nextTick(() => {
          if(index === this.activeIndex){
            vm.visible = true;
          }else{
            vm.visible = false;
          }
        })

      })
    },
    onMouseEnter(){
      this.clear();
    },
    onMouseleave(){
      if(this.timer){ return;}
      this.autoPlayHandle();
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
      if(this.autoPlay){
        this.timer = setInterval(() => {
        this.play();
        },this.interval)
      }
    },
    onIndicatorSelect(selectedIndex){
      this.lastIndex = this.activeIndex;
      this.activeIndex = selectedIndex;
      let reverse = false;
      // 这里需要根据之前的index和新的index判断是什么方向运动
      reverse = selectedIndex > this.lastIndex ? false :true
      this.updateChildren(reverse);
    },
    clear(){
      window.clearInterval(this.timer);
      this.timer = null;
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
  position:relative;
  .y-carousel-container{
    position:relative;
    width:100%;
    height:100%;
    overflow:hidden;
  }
  .y-carousel-dot{
    position:absolute;
    text-align:center;
    left:50%;
    bottom:5px;
    transform:translateX(-50%);
    width:100%;
    span{
      display:inline-block;
      box-sizing: border-box;
      width:30px;
      height:10px;
      background:#c0c4cc;
      margin-right: 10px;
      cursor:pointer;
    }
  }
}
</style>
