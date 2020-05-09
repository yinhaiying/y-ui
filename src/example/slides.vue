<template>
  <div>
    <y-slides :selected.sync = "selected">
      <y-slides-item name = "slides1">
        <div class="box"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2138889410,2488199090&fm=26&gp=0.jpg" alt=""></div>
      </y-slides-item>
      <y-slides-item name = "slides2">
        <div class = "box">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2404659445,3211739645&fm=11&gp=0.jpg" alt="">
        </div>
      </y-slides-item>
      <y-slides-item name = "slides3">
        <div class = "box">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=175815334,2932792593&fm=26&gp=0.jpg" alt="">
        </div>
      </y-slides-item>
    </y-slides>
  </div>
</template>
<script>
export default {
  name:'SlidesExample',
  data(){
    return {
      selected:'slides1'
    }
  },
}
</script>

<style lang="scss" scoped>
.box{
  // width:100%;
  height:300px;
  border:1px solid red;
  background:#ddd;
}
</style>

