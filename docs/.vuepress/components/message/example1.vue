<template>
  <y-button  @click = "open">打开消息提示</y-button>
</template>
<script>
export default {
  name:'MessageExample',
  methods:{
    open(){
      this.$message('这是一条消息提示');
    }
  }
}
</script>


