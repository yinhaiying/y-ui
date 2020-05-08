<template>
  <div>
    <y-slides :selected.sync = "selected">
      <y-slides-item name = "slides1">
        <div class = "box">1</div>
      </y-slides-item>
      <y-slides-item name = "slides2">
        <div class = "box">2</div>
      </y-slides-item>
      <y-slides-item name = "slides3">
        <div class = "box">3</div>
      </y-slides-item>
    </y-slides>
  </div>
</template>
<script>
export default {
  name:'SlidesExample',
  data(){
    return {
      selected:'slides3'
    }
  },
}
</script>

<style lang="scss" scoped>
.box{
  width:200px;
  height:150px;
  border:1px solid red;
  background:#ddd;
}
</style>

