<template>
  <div class = "y-slides">
    <div class="y-slides-window" ref = "window">
      <slot></slot>
    </div>
    <div class = "y-slides-dots">
      <span @click = "onDotSelect(index-1)" v-for = "index in childrenLength" :key = "index" :class = "{'active':selectedIndex == index - 1}">{{index}}</span>
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
    },
    duration:{
      type:Number,
      default:3000
    }
  },
  data(){
    return {
      childrenLength:0,
      lastSelectedIndex:undefined,
      reverse:true
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
    },
    names(){
      return this.$children.map((vm) => vm.name) || [];
    }
  },
  methods:{
    updateChildren(){
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        let newIndex = this.names.indexOf(selected);
        let oldIndex = this.lastSelectedIndex;
        vm.reverse = newIndex > oldIndex ? false :true;
        this.$nextTick(() => {
          vm.selected = selected;
        })
      })
    },
    autoPlayHandle(){
      this.timer = setInterval(() => {
        this.play();
      },this.duration)
    },
    getSelected(){
       return this.selected || this.$children[0].$props.name;
    },
    play(){
      let index = this.names.indexOf(this.getSelected());
      if(!this.reverse){
        if(index === this.names.length){ index = 0};
        this.$emit('update:selected',this.names[index+1]);
        index++;
      }else{
        if(index === 0){index = this.names.length};
        this.$emit('update:selected',this.names[index - 1]);
        index--;
      }
    },
    onDotSelect(index){
      this.lastSelectedIndex = this.names.indexOf(this.getSelected());
      this.$emit('update:selected',this.names[index]);
      clearInterval(this.timer);
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

