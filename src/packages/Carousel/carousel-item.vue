<template>
    <transition name = "slide">
        <div class="y-carousel-item" v-if = "visible" :class = "{reverse:reverse}">
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
        visible:true,
        reverse:false
    };
  },
};
</script>
<style lang="scss" scoped>
.y-carousel-item{
  display:inline-flex;
  width:100%;
}
.slide-enter-active,.slide-leave-active{
    transition:all 0.5s;
}
.slide-enter{
    transform:translateX(100%);
}

.slide-leave-to{
    transform:translateX(-100%);
}

.slide-enter.reverse{
    transform:translate(-100%);
}
.slide-leave-to.reverse{
    transform:translateX(100%);
}
.slide-leave-active{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
</style>
