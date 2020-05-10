<template>
  <div class = "y-carousel-example">
      <y-carousel :initialIndex = "initialIndex" :auto-play = "autoPlay" :reverse = "reverse">
          <y-carousel-item >
              <div class="wrapper">0</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">1</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">2</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">3</div>
          </y-carousel-item>
      </y-carousel>
  </div>

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
      reverse:true
    };
  }
};
</script>
<style lang="scss" scoped>
.y-carousel-example{
  width:300px;
}
.wrapper{
    width:300px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:38px;
    font-weight:bold;
    background:#A5B3C7;
}
</style>
