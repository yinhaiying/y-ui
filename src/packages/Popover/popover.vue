<template>
  <div class = "y-popover" @click = "show">
    <div class = "content-wrapper" v-if = "visible">
      <slot name = "content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-popover',
  data(){
    return {
      visible:false
    }
  },
  methods:{
    show(){
      this.visible = !this.visible;
    }
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
