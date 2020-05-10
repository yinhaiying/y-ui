<template>
<div class="box">
    <y-carousel :initialIndex = "initialIndex" :auto-play = "autoPlay" :reverse = "reverse">
        <y-carousel-item >
            <div style = "background:#A5B3C7" class="wrapper">0</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:#A5B3C7">1</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:#A5B3C7">2</div>
        </y-carousel-item>
        <y-carousel-item>
            <div class="wrapper" style = "background:#A5B3C7">3</div>
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
.box{
  width:400px;
}
.wrapper{
    width:100%;
    height:200px;
    border:1px solid red;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:38px;
    font-weight:bold;
}
</style>
