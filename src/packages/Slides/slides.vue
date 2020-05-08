<template>
  <div class = "y-slides">
    <div class="y-slides-window" ref = "window">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'y-slides',
  props:{
    selected:{
      type:String,
    }
  },
  mounted(){
    this.updateChildren();
  },
  updated(){
    this.updateChildren();
  },
  methods:{
    updateChildren(){
      // 如果没有selected，默认使用第一个。
      let selected = this.selected || this.$children[0].$props.name;
      this.$children.forEach((vm) => {
        vm.selected = selected;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.y-slides{
  display:inline-block;
  border:1px solid green;
  &-window{
    position:relative;
  }
}
</style>

