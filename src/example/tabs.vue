<template>
  <div>
    <!-- <y-tabs selected = "first" @update:selected="handleClick"> -->
      <!-- 事件名字为update:xxx   xxx为定义的属性值 那么就可以直接使用.sync修饰符 -->
      <div class = "item">
        <h2>简洁选项卡</h2>
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

    <div class = "item">
      <h2>标签选项卡</h2>
      <y-tabs :selected.sync = "activeName" type = "card">
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

    <div class = "item">
      <h2>卡片选项卡</h2>
      <y-tabs :selected.sync = "activeName" type = "border-card">
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

    <div class = "item">
      <h2>自定义标签名称</h2>
      <y-tabs :selected.sync = "activeName" type = "border-card">
        <y-tabs-nav>
          <y-tabs-item  name = "first">
            <template>
              <y-icon name = "settings"></y-icon>
              用户管理
            </template>
          </y-tabs-item>
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
    <div class = "item">
      <h2>禁用标签</h2>
      <y-tabs :selected.sync = "activeName">
        <y-tabs-nav>
          <y-tabs-item  name = "first" >
              用户管理
          </y-tabs-item>
          <y-tabs-item  name = "secode" disabled >配置管理</y-tabs-item>
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

    <div class = "item">
      <h2>附加内容</h2>
      <y-tabs :selected.sync = "activeName">
        <y-tabs-nav>
          <y-tabs-item  name = "first" >用户管理</y-tabs-item>
          <y-tabs-item  name = "secode" disabled >配置管理</y-tabs-item>
          <y-tabs-item  name = "third">角色管理</y-tabs-item>
          <y-tabs-item  name = "fourth">定时任务补偿</y-tabs-item>
          <template slot = "extra">
            <button style = "padding:2px">点击</button>
          </template>
        </y-tabs-nav>
        <y-tabs-content>
          <y-tabs-pane  name = "first">用户管理</y-tabs-pane>
          <y-tabs-pane  name = "secode">配置管理</y-tabs-pane>
          <y-tabs-pane  name = "third">角色管理</y-tabs-pane>
          <y-tabs-pane  name = "fourth">定时任务补偿</y-tabs-pane>
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
