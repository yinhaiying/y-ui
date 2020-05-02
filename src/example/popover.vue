<template>
  <div class="popover-example">
    <!-- <div class="test" style = "height:1000px;border:10px solid green;margin-left:1000px"></div> -->
    <!-- <div > -->
      <y-popover position = "top" style = "margin-right:20px">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">上</y-button>
      </y-popover>
    <!-- </div> -->

      <y-popover position = "bottom" style = "margin-right:20px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">下</y-button>
      </y-popover>
      <y-popover position = "left" style = "margin-right:20px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">左</y-button>
      </y-popover>
      <y-popover position = "right" style = "margin-right:100px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">右</y-button>
      </y-popover>
  </div>
</template>

<script>
export default {
  name:"PopoverExample",
  methods:{
    xxx(){
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.popover-example{
  overflow:hidden;
}
</style>
