<template>
    <y-popover position = "top" style = "margin-right:20px">
      <template slot = "content" slot-scope = "{close}">
        <div>
          这里内容区域
          <y-button @click = "close">关闭</y-button>
        </div>
      </template>
      <y-button type = "primary">手动关闭</y-button>
    </y-popover>
</template>
