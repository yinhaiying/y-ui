<template>
  <div id="app">
    <div>
      <h3>基础用法</h3>
      <y-button>默认按钮</y-button>
      <y-button type = "primary" >主要按钮</y-button>
      <y-button type = "info" >信息按钮</y-button>
      <y-button type = "success" >成功按钮</y-button>
      <y-button type = "warning" >警告按钮</y-button>
      <y-button type = "danger" >危险按钮</y-button>
    </div>
    <div>
      <h3>禁用状态</h3>
      <y-button disabled>默认按钮</y-button>
      <y-button type = "primary" disabled>主要按钮</y-button>
      <y-button type = "info" disabled>信息按钮</y-button>
      <y-button type = "success" disabled>成功按钮</y-button>
      <y-button type = "warning" disabled>警告按钮</y-button>
      <y-button type = "danger" disabled>危险按钮</y-button>
    </div>
    <div>
      <h3>圆角按钮</h3>
      <y-button round>默认按钮</y-button>
      <y-button type = "primary" round >主要按钮</y-button>
      <y-button type = "info" round>信息按钮</y-button>
      <y-button type = "success" round>成功按钮</y-button>
      <y-button type = "warning" round>警告按钮</y-button>
      <y-button type = "danger" round>危险按钮</y-button>
    </div>
    <div>
      <h3>图标按钮</h3>
      <y-button round icon = "settings" icon-position = "left">默认按钮</y-button>
      <y-button type = "primary" round icon = "settings" icon-position = "right">主要按钮</y-button>
      <y-button type = "info" round icon = "settings">信息按钮</y-button>
      <y-button type = "success" round icon = "download" icon-position = "right">下载</y-button>
      <y-button type = "warning" round icon = "down">展开</y-button>
      <y-button type = "danger" round icon = "error">危险按钮</y-button>
      <y-button type = "danger" round icon = "loading">加载中</y-button>
    </div>
    <div>
      <h3>点击事件</h3>
      <y-button type = "primary" round icon = "settings"  @click="onClick">点击事件</y-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ButtonExample',
  components: {
  },
  methods:{
    onClick(){
     console.log('点击事件')
    }
  }
}
</script>

