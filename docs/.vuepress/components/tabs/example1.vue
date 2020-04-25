<template>
      <div class = "item">
        <y-tabs :selected = "activeName" @click = "handleClick">
          <y-tabs-nav>
            <y-tabs-item  name = "first">用户管理</y-tabs-item>
            <y-tabs-item  name = "secode">配置管理</y-tabs-item>
            <y-tabs-item  name = "third">角色管理</y-tabs-item>
            <y-tabs-item  name = "fourth">定时任务补偿</y-tabs-item>
          </y-tabs-nav>
          <y-tabs-content>
            <y-tabs-pane  name = "first">用户管理</y-tabs-pane>
            <y-tabs-pane  name = "secode">配置管理</y-tabs-pane>
            <y-tabs-pane  name = "third">角色管理</y-tabs-pane>
            <y-tabs-pane  name = "fourth">定时任务补偿</y-tabs-pane>
          </y-tabs-content>
        </y-tabs>
      </div>
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    },
    methods:{
      handleClick(tab){
        console.log(tab)
      }
    }
  }
</script>
