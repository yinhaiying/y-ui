<template>
  <div class="popover-example">
    <div>
      <h2 style = "margin-bottom:20px;font-weight:bold;">popover方位</h2>
      <y-popover position = "top" style = "margin-right:20px">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">上</y-button>
      </y-popover>
      <y-popover position = "bottom" style = "margin-right:20px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">下</y-button>
      </y-popover>
      <y-popover position = "left" style = "margin-right:20px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">左</y-button>
      </y-popover>
      <y-popover position = "right" style = "margin-right:100px;">
        <template slot = "content">
          <div>这里是内容区域</div>
        </template>
        <y-button type = "primary">右</y-button>
      </y-popover>
    </div>
    <div class="trigger" style = "margin-top:40px">
      <h2 style = "margin-bottom:20px;font-weight:bold;">触发方式</h2>
      <y-popover position = "top" style = "margin-right:20px" trigger = "click">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">click</y-button>
      </y-popover>
      <y-popover position = "right" style = "margin-right:20px" trigger = "hover">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">hover</y-button>
      </y-popover>
    </div>
    <div class="slot-scope" style = "margin-top:40px">
      <h2 style = "margin-bottom:20px;font-weight:bold;">触发方式</h2>
      <y-popover position = "top" style = "margin-right:20px" trigger = "click">
        <template slot = "content" slot-scope = "{close}">
          <div>这里内容区域
            <y-button @click = "close">关闭</y-button>
          </div>
        </template>
        <y-button type = "primary">click</y-button>
      </y-popover>
    </div>

  </div>
</template>

<script>
export default {
  name:"PopoverExample",
  methods:{
    xxx(){
      alert(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.popover-example{
  overflow:hidden;
}
</style>
