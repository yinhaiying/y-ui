<template>
  <div class="carouselExample">
    <y-carousel :initialIndex = "initialIndex" :auto-play = "autoPlay" :reverse = "reverse">
        <y-carousel-item >
            <div style = "background:rgba(255,67,244)" class="wrapper">0</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:pink">1</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:green">2</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:yellow">3</div>
        </y-carousel-item>
    </y-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      initialIndex:0,
      autoPlay:true,
      reverse:false
    };
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
    width:300px;
    height:200px;
    border:1px solid red;
}
</style>
