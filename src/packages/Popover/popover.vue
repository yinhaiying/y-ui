<template>
  <div class="y-popover" @click="showPopover" ref = "popover">
    <div id="popper" ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
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
      position: {},
    };
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
    showPopover(event) {
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
      document.body.appendChild(this.$refs.contentWrapper);
      let triggerWrapperInfo = this.$refs.triggerWrapper.getBoundingClientRect();
      let popoverInfo = this.$refs.contentWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = triggerWrapperInfo.left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = triggerWrapperInfo.top + window.scrollY - popoverInfo.height + "px";
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
  margin-top:-10px;
  &::before,&::after{
    content:"";
    display:block;
    border:10px solid transparent;
    width:0px;
    height:0px;
    position:absolute;
    left:10px;
  }
  &::before{
    top:100%;
    border-top-color: #ebeef5;
  }
  &::after{
    top:calc(100% - 1px);
    border-top-color: #fff;
  }
}
</style>
