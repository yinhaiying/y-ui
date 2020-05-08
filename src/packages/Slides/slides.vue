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
    },
    autoPlay:{
      type:Boolean,
      default:true
    }
  },
  watch:{
    selected(){
      this.updateChildren();
    }
  },
  mounted(){
    this.updateChildren();
    if(this.autoPlay){
      this.autoPlayHandle();
    }
  },
  // updated(){
  //   this.updateChildren();
  // },
  methods:{
    updateChildren(){
      // 如果没有selected，默认使用第一个。
      let selected = this.getSelected();
      const names = this.$children.map((vm) => vm.name);
      this.$children.forEach((vm) => {
        vm.selected = selected;
        let newIndex = names.indexOf(selected);
        let oldIndex = names.indexOf(vm.name);
        vm.reverse = newIndex > oldIndex ? false :true
      })
    },
    autoPlayHandle(){
      const names = this.$children.map((vm) => vm.name);
      let index = names.indexOf(this.getSelected());
      this.timer = setInterval(() => {
        if(index === names.length){ index = 0};
        //  this.$emit('update:selected',names[index+1]);
        //  index++;
        if(index === 0){index = names.length};
        this.$emit('update:selected',names[index - 1]);
        if(index === -1){index=names.length-1};
        index--;
      },3000)
    },
    getSelected(){
       return this.selected || this.$children[0].$props.name;
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.y-slides{
  display:inline-block;
  border:1px solid green;
  &-window{
    position:relative;
    overflow:hidden;
  }
}
</style>

