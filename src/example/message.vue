<template>
  <div>
    <div>
      <h2>基础用法</h2>
      <p>从顶部出现，3秒后自动消失</p>
      <y-button  @click = "open">打开消息提示</y-button>
    </div>
    <div>
      <h2>不同状态</h2>
      <p>用来显示[成功、警告、消息、错误]类的操作反馈</p>
      <y-button  @click = "open1" type = "success">成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
    <div>
      <h2>可关闭</h2>
      <p>可关闭的消息</p>
      <y-button  @click = "open1" type = "success">成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
    <div>
      <h2>文字居中</h2>
      <p>实现消息文字居中</p>
      <y-button  @click = "open1" type = "success">成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
    <div>
      <h2>使用HTML片段</h2>
      <p>将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。</p>
      <y-button  @click = "open1" type = "success">成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'MessageExample',
  methods:{
    open(){
      // console.log(this.$message)
      this.$message('这是一条消息提示');
    },
    open1(){
      this.$message({
        message:'恭喜你，这是一条成功的消息',
        type:'success',
      });
    },
    open2(){
      this.$message({
        message:'警告哦，这是一条警告的消息',
        type:'warning',
        showClose:true
      });
    },
    open3(){
      this.$message({
        message:'这是一条消息',
        type:'info',
        showClose:true,
        center:true
      });
    },
    open4(){
      this.$message({
        message:'<div>价钱：<span>70元</span></div>',
        type:'error',
        showClose:true,
        "dangerouslyUseHTMLString":true,
        offset:40
      });
    }
  }
}
</script>

<style lang = "scss">
.y-button{
  margin-right:20px;
}
</style>

