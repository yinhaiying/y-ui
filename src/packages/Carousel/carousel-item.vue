<template>
    <transition name = "slide">
        <div class="y-carousel-item" v-if = "visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
  name:'y-carousel-item',
  props: {},
  data() {
    return {
        visible:true
    };
  },
};
</script>
<style lang="scss" scoped>
.y-carousel-item{
   
}
.slide-enter-active,.slide-leave-active{
    transition:all 1s;
}
.slide-enter{
    transform:translateX(100%);
}
.slide-leave-to{
    transform:translateX(-100%);
}
.slide-leave-active{
    position:absolute;
    left:0;
    top:0;
    z-index:-1;
}
</style>