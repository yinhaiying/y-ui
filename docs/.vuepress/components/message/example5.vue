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
        message:'恭喜你，<span>这是一条成功的消息</span>',
        type:'success',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open2(){
      this.$message({
        message:'警告，<span>，这是一条警告的消息</span>',
        type:'warning',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open3(){
      this.$message({
        message:'Hi，<span>，这是一条普通的消息</span>',
        type:'info',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open4(){
      this.$message({
        message:'糟糕，<span>，这是一条报错的消息</span>',
        type:'error',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    }
  }
}
</script>
