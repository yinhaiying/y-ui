<template>
  <div>
      <y-popover position = "top" style = "margin-right:20px">
        <template slot = "content">
          <div>这里内容区域</div>
        </template>
        <y-button type = "primary">嵌套文字</y-button>
      </y-popover>
      <y-popover position = "top" style = "margin-right:20px">
        <template slot = "content">
          <div>
            <h3>嵌套HTML</h3>
            <y-button>取消</y-button>
          </div>
        </template>
        <y-button type = "primary">嵌套HTML</y-button>
      </y-popover>
  </div>
</template>
