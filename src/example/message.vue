<template>
  <div>
    <h2>基础用法</h2>
    <p>从顶部出现，3秒后自动消失</p>
    <y-button  @click = "open1">打开消息提示</y-button>
    <!-- <y-button type = "warning" @click = "open2">警告</y-button>
    <y-button type = "info" @click = "open3">消息</y-button>
    <y-button type = "danger" @click = "open4">错误</y-button> -->
  </div>
</template>

<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      // console.log(this.$message)
      this.$message('这是一条消息提示');
    }
  }
}
</script>

<style lang = "scss">

</style>

