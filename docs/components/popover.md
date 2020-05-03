# Popover组件

## 基础用法
Popover组件用于手动触发，展示信息。

<demo-block>
::: slot source
<popover-example1></popover-example1>
:::

Popover 组件使用默认插槽来触发，展示的弹出框内容通过slot=content的具名插槽来实现。

::: slot highlight
```html
<template>
    <y-popover position = "top">
      <template slot = "content">
        <div>这里内容区域</div>
      </template>
      <y-button type = "primary">激活</y-button>
    </y-popover>
</template>
```
:::
</demo-block>

## 触发方式
Popover组件支持click和hover两种触发方式,默认click触发。

<demo-block>
::: slot source
<popover-example2></popover-example2>
:::

通过trigger属性可以设置触发方式，支持click和hover两种触发方式。

::: slot highlight
```html
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
```
:::
</demo-block>

## 出现位置
Popover组件支持top、right、bottom和left四个方向展示。

<demo-block>
::: slot source
<popover-example3></popover-example3>
:::

通过position属性可以设置弹出框出现的位置，支持上下左右四个方向。

::: slot highlight
```html
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
```
:::
</demo-block>

## 嵌套信息
Popover组件支持嵌套信息。

<demo-block>
::: slot source
<popover-example4></popover-example4>
:::

通过slot=content具名插槽可以嵌套任何信息包括文字和HTML结构。

::: slot highlight
```html
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
```
:::
</demo-block>

## 手动关闭
Popover组件支持手动关闭弹出框

<demo-block>
::: slot source
<popover-example5></popover-example5>
:::

在template元素身上使用slot-scope = "{close}"获取到close方法，通过这个方法可以手动关闭弹出框。

::: slot highlight
```html
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
```
:::
</demo-block>

## Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
tirgger|触发方式| String |click / hover|click
position|弹出框的位置|String | top / right / bottom /left | top

## Slot
参数|说明
:-|:-|
- |触发 Popover 显示的 HTML 元素|
content|popover的内容|
