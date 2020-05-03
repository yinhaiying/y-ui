<template>
  <div class="y-popover"  ref = "popover">
    <div id="popper" ref="contentWrapper" class="content-wrapper" v-if="visible" :class = "{[`popover-${position}`]:true}">
      <slot name="content" :close = "close"></slot>
    </div>
    <span class="trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { addClass } from "../../utils/util";
export default {
  name: "y-popover",
  data() {
    return {
      visible: false,
    };
  },
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','left','right','bottom'].includes(value);
      }
    },
    trigger:{
      type:String,
      default:'click',
      validator(value){
        return ['click','hover'].includes(value);
      }
    }
  },
  mounted(){
    // 动态绑定事件
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter',this.open);
      this.$refs.popover.addEventListener('mouseleave',this.close);
    }
  },
  destroyed(){
    if(this.trigger === 'click'){
      this.$refs.popover.removeEventListener('click',this.onClick)
    }else{
      this.$refs.popover.removeEventListener('mouseenter',this.open);
      this.$refs.popover.removeEventListener('mouseleave',this.close);
    }
  },
  methods: {
    close(){
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      this.$nextTick(()=> {
        this.setPosition();
        this.listenToDocument();
      })
    },
    onClick(event) {
      if(this.$refs.triggerWrapper.contains(event.target)){
        this.visible ? this.close() : this.open();
      }
    },
    onClickDocument(e){
      const contentWrapper = this.$refs.contentWrapper;
      if(this.$el.contains(e.target) || !contentWrapper || contentWrapper.contains(e.target)){
        return;
      }else{
         this.close();
      }
    },
    listenToDocument() {
      document.addEventListener('click',this.onClickDocument);
    },
    setPosition() {
      // 确保$refs已经存在，然后把它添加到body身上
      let contentWrapper = this.$refs.contentWrapper;
      document.body.appendChild(contentWrapper);
      let triggerWrapperInfo = this.$refs.triggerWrapper.getBoundingClientRect();
      let popoverInfo = contentWrapper.getBoundingClientRect();
      let obj = {
        top:{ left:triggerWrapperInfo.left + window.scrollX , top:triggerWrapperInfo.top + window.scrollY - popoverInfo.height },
        bottom:{ left:triggerWrapperInfo.left + window.scrollX, top:triggerWrapperInfo.top + window.scrollY + triggerWrapperInfo.height },
        left:{ left:triggerWrapperInfo.left + window.scrollX - popoverInfo.width, top:triggerWrapperInfo.top + window.scrollY + (triggerWrapperInfo.height - popoverInfo.height)/2 },
        right:{ left:triggerWrapperInfo.left + window.scrollX + triggerWrapperInfo.width, top:triggerWrapperInfo.top + window.scrollY + (triggerWrapperInfo.height - popoverInfo.height)/2 },
      }
      contentWrapper.style.left = obj[this.position].left  + "px";
      contentWrapper.style.top = obj[this.position].top  + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.y-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .trigger-wrapper {
    display: inline-block;
  }
}
.content-wrapper {
  max-width:20em;
  word-break: break-all;
  position: absolute;
  border: 1px solid #ebeef5;
  // box-shadow: 0 2px 12px 0 red;
  filter:drop-shadow(0 1px 1px  rgba(0,0,0,0.1));
  background:#fff;
  padding: 18px 20px;
  z-index: 10000;
  &::before,&::after{
    content:"";
    display:block;
    border:10px solid transparent;
    width:0px;
    height:0px;
    position:absolute;
  }
  &.popover-top{
    margin-top:-10px;
    left:10px;
    &::before{
      top:100%;
      border-top-color: #ebeef5;
      border-bottom:none;
    }
    &::after{
      top:calc(100% - 1px);
      border-top-color: #fff;
      border-bottom:none;
    }
  }
  &.popover-bottom{
    margin-top:10px;
    left:10px;
    &::before{
      bottom:100%;
      border-top:none;
      border-bottom-color: #ebeef5;
    }
    &::after{
      bottom:calc(100% - 1px);
      border-top:none;
      border-bottom-color: #fff;
    }
  }
  &.popover-left{
    margin-left:-10px;
    &::before{
      left:100%;
      border-left-color: #ebeef5;
      top:50%;
      transform: translateY(-50%);
      border-right:none;
    }
    &::after{
      left:calc(100% - 1px);
      border-left-color: #fff;
      top:50%;
      transform: translateY(-50%);
      border-right:none;
    }
  }
  &.popover-right{
    margin-left:10px;
    &::before{
      right:100%;
      border-right-color: #ebeef5;
      top:50%;
      transform: translateY(-50%);
      border-left:none;
    }
    &::after{
      right:calc(100% - 1px);
      border-right-color: #fff;
      top:50%;
      border-left:none;
      transform: translateY(-50%);
    }
  }

}
</style>
