<template>
  <div class = "y-popover" @click.stop= "showPopover" >
    <div id = "popper" @click.stop  ref = "popper" class = "content-wrapper" v-if = "visible">
      <slot name = "content"></slot>
    </div>
    <span class = "trigger-wrapper"  ref = "triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import {addClass} from "../../utils/util";
export default {
  name:'y-popover',
  data(){
    return {
      visible:false,
      position:{}
    }
  },
  methods:{
    showPopover (){
      this.visible = !this.visible;
      if(this.visible == true){
        this.$nextTick(() => {
          this.setPosition();
        })
        let fn = () =>{
            this.visible = false;
            document.removeEventListener('click',fn)
        }
        document.addEventListener('click',fn);
      }
    },
    setPosition(){
        // 确保$refs已经存在，然后把它添加到body身上
        document.body.appendChild(this.$refs.popper);
        let triggerWrapperInfo = this.$refs.triggerWrapper.getBoundingClientRect();
        let popoverInfo = this.$refs.popper.getBoundingClientRect();
        this.$refs.popper.style.left = triggerWrapperInfo.left + window.scrollX + 'px';
        this.$refs.popper.style.top = triggerWrapperInfo.top + window.scrollY -  popoverInfo.height  + 'px';
    }
  },
}
</script>

<style lang="scss" scoped>
.y-popover{
  display:inline-block;
  vertical-align: top;
  position:relative;
  .trigger-wrapper{
    display:inline-block;
  }
}
.content-wrapper{
  position:absolute;
  border:1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  padding:18px 20px;
  z-index:10000;
}
</style>
