<template>
  <div class="popover-example">
    <!-- <div class="test" style = "height:1000px;border:10px solid green;margin-left:1000px"></div> -->
    <div >
      <y-popover>
        <template slot = "content">
          <div>helooworlhelooworldhelooworldhelooworldhelooworldhelooworldhelooworldhelooworldd</div>
        </template>
        <y-button type = "primary">激活</y-button>
      </y-popover>
    </div>
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
