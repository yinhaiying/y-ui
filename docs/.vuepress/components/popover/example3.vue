<template>
    <div>
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
</template>
