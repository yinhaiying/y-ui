<template>
  <div>
    <!-- <y-tabs selected = "first" @update:selected="handleClick"> -->
      <!-- 事件名字为update:xxx   xxx为定义的属性值 那么就可以直接使用.sync修饰符 -->
      <div class = "item">
        <h2>简洁选项卡</h2>
        <y-tabs :selected = "activeName" @click = "handleClick">
          <y-tabs-nav>
            <y-tabs-item label = "用户管理" name = "first">用户管理</y-tabs-item>
            <y-tabs-item label="配置管理" name = "secode">配置管理</y-tabs-item>
            <y-tabs-item label="角色管理" name = "third">角色管理</y-tabs-item>
            <y-tabs-item label="定时任务补偿" name = "fourth">定时任务补偿</y-tabs-item>
          </y-tabs-nav>
          <y-tabs-content>
            <y-tabs-pane label = "用户管理" name = "first">用户管理</y-tabs-pane>
            <y-tabs-pane label="配置管理" name = "secode">配置管理</y-tabs-pane>
            <y-tabs-pane label="角色管理" name = "third">角色管理</y-tabs-pane>
            <y-tabs-pane label="定时任务补偿" name = "fourth">定时任务补偿</y-tabs-pane>
          </y-tabs-content>
        </y-tabs>
      </div>

    <div class = "item">
      <h2>标签选项卡</h2>
      <y-tabs :selected.sync = "activeName" type = "card">
        <y-tabs-nav>
          <y-tabs-item label = "用户管理" name = "first">用户管理</y-tabs-item>
          <y-tabs-item label="配置管理" name = "secode">配置管理</y-tabs-item>
          <y-tabs-item label="角色管理" name = "third">角色管理</y-tabs-item>
          <y-tabs-item label="定时任务补偿" name = "fourth">定时任务补偿</y-tabs-item>
        </y-tabs-nav>
        <y-tabs-content>
          <y-tabs-pane label = "用户管理" name = "first">用户管理</y-tabs-pane>
          <y-tabs-pane label="配置管理" name = "secode">配置管理</y-tabs-pane>
          <y-tabs-pane label="角色管理" name = "third">角色管理</y-tabs-pane>
          <y-tabs-pane label="定时任务补偿" name = "fourth">定时任务补偿</y-tabs-pane>
        </y-tabs-content>
      </y-tabs>
    </div>

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

<style lang="scss" scoped>
.item{
  margin:20px;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  // border:1px solid #ddd;
  h2{
    margin-bottom:20px;
    font-size:16px;
    font-weight: bold;
  }
}
</style>
