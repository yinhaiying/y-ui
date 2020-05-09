<template>
  <transition name = "slide">
    <div class = "y-slides-item" v-if = "visible" :class = "{'reverses':reverse}">
        <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name:'y-slides-item',
  props:{
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      selected:null,
      reverse:false
    }
  },
  computed:{
    visible(){
      return this.selected === this.name;
    }
  }
}
</script>

<style lang="scss" scoped>

.slide-enter{
  transform:translateX(100%);
  opacity:0;
}
.slide-leave-to{
  transform:translateX(-100%);
  opacity:0;
}
.slide-enter.reverses{
  transform:translateX(-100%);
  opacity:0;
}
.slide-leave-to.reverses{
  transform:translateX(100%);
  opacity:0;
}
.slide-enter-active,.slide-leave-active{
    transition:all 1s;
}
.slide-leave-active{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
</style>

