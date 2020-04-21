<template>
  <div>
    <y-button  @click = "open1" type = "success">成功</y-button>
    <y-button type = "warning" @click = "open2">警告</y-button>
    <y-button type = "info" @click = "open3">消息</y-button>
    <y-button type = "danger" @click = "open4">错误</y-button>
  </div>
</template>

<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      this.$message({
        message:'恭喜你，这是一条成功的消息',
        type:'success',
        showClose:true,
      });
    },
    open2(){
      this.$message({
        message:'警告哦，这是一条警告的消息',
        type:'warning',
        showClose:true,
      });
    },
    open3(){
      this.$message({
        message:'这是一条消息',
        type:'info',
        showClose:true,
      });
    },
    open4(){
      this.$message({
        message:'这是一条消息报错的消息',
        type:'error',
        showClose:true,
      });
    }
  }
}
</script>
