<template>
  <div class = "y-slides">
    <div class="y-slides-window" ref = "window">
      <slot></slot>
    </div>
    <!-- <div class = "y-slides-dots">
      <span @click = "select(index-1)" v-for = "index in childrenLength" :key = "index" :class = "{'active':selectedIndex == index - 1}">{{index}}</span>
    </div> -->
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
    },
    duration:{
      type:Number,
      default:3000
    }
  },
  data(){
    return {
      childrenLength:0,
      lastSelected:undefined
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
    };
    this.childrenLength = this.$children.length;
  },
  computed:{
    selectedIndex(){
      const names = this.$children.map((vm) => vm.name);
      return names.indexOf(this.getSelected());
    }
  },
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
      },this.duration)
    },
    getSelected(){
       return this.selected || this.$children[0].$props.name;
    },
    select(index){
      const names = this.$children.map((vm) => vm.name);
      this.$emit('update:selected',names[index]);
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.y-slides{
  border:1px solid green;
  display:inline-block;
  &-window{
    position:relative;
    overflow:hidden;
  }
  &-dots{
    >span{
      cursor: pointer;
      width:20px;
      height:20px;
      display:inline-block;
      text-align: center;
      border-radius: 50% 50%;
      &.active{
        background:red;
      }
    }

  }
}
</style>

