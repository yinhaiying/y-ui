<template>
  <div>
      <y-popover position = "top" style = "margin-right:20px">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">click激活</y-button>
      </y-popover>
      <y-popover position = "top" style = "margin-right:20px" trigger = "hover">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">hover激活</y-button>
      </y-popover>
  </div>
</template>

