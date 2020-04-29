<template>
  <div class = "y-popover" @click.stop = "showPopper" >
    <div id = "popper" @click.stop  ref = "popper" class = "content-wrapper" v-if = "visible">
      <slot name = "content"></slot>
    </div>
      <slot></slot>
  </div>
</template>

<script>
import {addClass} from "../../utils/util";
export default {
  name:'y-popover',
  data(){
    return {
      visible:false
    }
  },
  methods:{
    showPopper (){
      console.log('1:'+this.visible)
      this.visible = !this.visible;
      if(this.visible == true){
        this.$nextTick(() => {
          let fn = () =>{
              this.visible = false;
              document.removeEventListener('click',fn)
          }
          document.addEventListener('click',fn);
        })
      }
    }
  },
  mounted(){
    console.log(this.$refs.popper)
    // console.log(this.$slots.content[0].$options)
    // console.log(document.getElementById('popper'))
  }
}
</script>

<style lang="scss" scoped>
.y-popover{
  display:inline-block;
  vertical-align: top;
  position:relative;
  .content-wrapper{
    position:absolute;
    bottom:100%;
    left:0;
    border:1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding:18px 20px;
  }
}
</style>
