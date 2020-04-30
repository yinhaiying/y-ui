<template>
  <div class="popover-example">
    <!-- <div class="test" style = "height:1000px;border:10px solid green;margin-left:1000px"></div> -->
    <y-popover>
      <template slot = "content">
        <div>这里是popover展示的内容</div>
      </template>
      <y-button type = "primary">激活</y-button>
    </y-popover>
  </div>
</template>

<script>
export default {
  name:"PopoverExample"
}
</script>

<style lang="scss" scoped>
.popover-example{
  overflow:hidden;
}
</style>
