<template>
  <div>
    <y-slides :selected = "selected">
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
      selected:'slides1'
    }
  },
  created(){
    let n = 1;
    setInterval(() => {
      n += 1;
      if(n === 4){
        n = 1;
      }
      this.selected = 'slides' + n;
    },3000)
  }
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

