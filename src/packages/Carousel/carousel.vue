<template>
  <div class="y-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseleave">
      <div class="y-carousel-container">
        <slot></slot>
      </div>
      <div class="y-carousel-dot">
        <span :class = "{'active':activeIndex === n -1}" v-for = "n in childrens.length" :key = "n" @click = "onSelect(n-1)"></span>
      </div>
      <div class="y-carousel-arrow">
        <span @click = "onSelect(activeIndex-1)"><y-icon name = "big_arrow-left"></y-icon></span>
        <span @click = "onSelect(activeIndex+1)"><y-icon name = "big_arrow-right"></y-icon></span>
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
      default:3000
    },
    reverse:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      activeIndex:0,
      childrens:[],
      lastIndex:undefined,
      timer:null
    };
  },
  watch:{
    initialIndex(newIndex){
      this.activeIndex = newIndex;
      this.updateChildren(this.reverse);
    }
  },
  mounted(){
    this.activeIndex = this.initialIndex;
    this.childrens = this.$children.filter((item) => {
      return item.hasOwnProperty('reverse');
    });
    this.updateChildren(this.reverse);
    this.autoPlayHandle();
  },
  methods:{
    updateChildren(reverse){
        this.childrens.forEach((vm,index) => {
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
          if(this.activeIndex === this.childrens.length){
              this.activeIndex = 0;
          }
        }else{
          this.activeIndex -= 1;
          if(this.activeIndex === -1){
            this.activeIndex = this.childrens.length-1;
          }
        }
        this.updateChildren(this.reverse);
    },
    autoPlayHandle(){
      if(this.autoPlay){
        this.timer = setInterval(() => {
        this.play();
        },this.interval)
      }
    },
    onSelect(selectedIndex){
      this.lastIndex = this.activeIndex;
      let reverse = false;
      // 这里需要根据之前的index和新的index判断是什么方向运动
      reverse = selectedIndex > this.lastIndex ? false :true;
      this.activeIndex = selectedIndex;
      if(reverse){
        if(this.activeIndex === -1){
          this.activeIndex = this.childrens.length-1;
        }
      }else{
        if(this.activeIndex === this.childrens.length){
          this.activeIndex = 0;
        }
      }
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
  position:relative;
  // width:100%;
  .y-carousel-container{
    position:relative;
    // width:100%;
    // height:100%;
    overflow:hidden;
  }
  .y-carousel-dot{
    position:absolute;
    text-align:center;
    left:50%;
    bottom:5px;
    transform:translateX(-50%);
    span{
      display:inline-flex;
      box-sizing: border-box;
      width:1.2em;
      height:1.2em;
      border-radius:50%;
      background:#ddd;
      margin-right: 0.2em;
      justify-content: center;
      align-items:center;
      &:hover{
        cursor:pointer;
      }
      &.active{
        background:rgba(0,0,0,0.45);
        color:#fff;
        &:hover{
          cursor:default;
        }

      }
    }
  }
  &:hover{
    .y-carousel-arrow{
      display:inline-flex;
      width:100%;
      position:absolute;
      height:20px;
      top:50%;
      transform:translateY(-50%);
      span{
        position:absolute;
        font-size:20px;
        width:28px;
        height:28px;
        display:flex;
        justify-content: center;
        align-items:center;
        border-radius:50%;
        color:#fff;
        background:#96A4B1;
        &:hover{
          background:#96A4B8;
          cursor: pointer;
        }
        &:first-child{
          left:10px;
        }
        &:last-child{
          right:10px;
        }
      }
    }
  }
  .y-carousel-arrow{
    display: none;
  }

}
</style>
