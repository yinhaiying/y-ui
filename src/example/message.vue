<template>
  <div>
    <y-button type = "success" @click = "open1">成功</y-button>
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

