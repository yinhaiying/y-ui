# Collapse组件
通过折叠面板收纳内容区域
## 基础用法
Collapse组件可同时展开多个面板，面板之间不影响。

<demo-block>
::: slot source
<collapse-example1></collapse-example1>
:::

Collapse组件可同时展开多个面板，面板之间不影响。通过selected属性可以支持同时展开多个面板，selected属性的值
为name组成的数组。`y-collapse-item`的name属性为必传。

::: slot highlight
```html
<template>
    <y-collapse :selected.sync = "name">
      <y-collapse-item title = "标题1" name = "content1">
         内容一
      </y-collapse-item>
      <y-collapse-item title = "标题2" name = "content2">
         内容二
      </y-collapse-item>
      <y-collapse-item title = "标题3" name = "content3">
         内容三
      </y-collapse-item>
    </y-collapse>
</template>
<script>
export default {
  name:'CollapseExample',
  data(){
    return {
      name:['content1','content3']
    }
  }
}
</script>
```
:::
</demo-block>

## 手风琴效果
每次只能展开一个面板

<demo-block>
::: slot source
<collapse-example2></collapse-example2>
:::

通过设置accordion属性，可以设置手风琴效果。

::: slot highlight
```html
<template>
    <y-collapse :selected.sync = "name" accordion>
      <y-collapse-item title = "标题1" name = "content1">
         内容一
      </y-collapse-item>
      <y-collapse-item title = "标题2" name = "content2">
         内容二
      </y-collapse-item>
      <y-collapse-item title = "标题3" name = "content3">
         内容三
      </y-collapse-item>
    </y-collapse>
</template>
<script>
export default {
  name:'CollapseExample',
  data(){
    return {
      name:['content1','content3']
    }
  }
}
</script>
```
:::
</demo-block>

## Collapse Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
selected|绑定值，选中选项卡的 name|Array|-|-
accordion|手风琴模式|String| - | -

## Collapse-Item Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
title|面板标题（必传）|String|-|-
name|面板唯一标识符（必传）|String| - | -

## Collapse Event
参数|说明|回调参数|
:-|:-|:-|:-|:-|:-
selected|面板被选中时触发，支持.sync语法|当前选中的所有面板
