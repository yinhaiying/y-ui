<template>
  <div class="carouselExample">
    <y-carousel :initialIndex = "initialIndex">
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
    <div style = "margin-top:50px;">
      <button @click = "click" >点击</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      initialIndex:0
    };
  },
  methods:{
    click(){
      this.initialIndex++;
      if(this.initialIndex > 3){
        this.initialIndex = 0;
      }
      console.log(this.initialIndex)
    }
  },
};
</script>
<style lang="scss" scoped>
.wrapper{
    width:150px;
    height:100px;
    border:1px solid red;
}
</style>
