# Tabs组件
Tabs组件用于实现内容切换
## 基础用法
基础的、简洁的标签页。

<demo-block>
::: slot source
<tabs-example1></tabs-example1>
:::

Tabs 组件提供了选项卡功能，通过 selected 属性来指定当前选中的标签页。
在选项卡导航部分和内容部分需要传入一一对应的name属性来分别指定当前选中状态和展示内容。
::: slot highlight
```html
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

```
:::
</demo-block>

## 标签化选项卡
可以通过指定type属性来设置选项卡样式

<demo-block>
::: slot source
<tabs-example2></tabs-example2>
:::

只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。
::: slot highlight
```html
<template>
      <div class = "item">
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
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    },
  }
</script>
```
:::
</demo-block>

## 卡片化选项卡
可以通过指定type属性来设置选项卡样式

<demo-block>
::: slot source
<tabs-example3></tabs-example3>
:::

只需要设置 type 属性为 border-card 就可以使选项卡改变为卡片风格。
::: slot highlight
```html
<template>
      <div class = "item">
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
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    }
  }
</script>
```
:::
</demo-block>

## 自定义选项卡
选项卡导航栏可以进行自定义比如使用icon等。

<demo-block>
::: slot source
<tabs-example4></tabs-example4>
:::

可以在y-tabs-item中使用Icon等进行自定义选项卡。
::: slot highlight
```html
<template>
      <div class = "item">
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
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    }
  }
</script>
```
:::
</demo-block>

## 禁用选项卡
选项卡导航栏支持禁用。

<demo-block>
::: slot source
<tabs-example5></tabs-example5>
:::

可以在y-tabs-item中使用disabled属性禁用选项卡。
::: slot highlight
```html
<template>
      <div class = "item">
      <y-tabs :selected.sync = "activeName">
        <y-tabs-nav>
          <y-tabs-item  name = "first" >用户管理</y-tabs-item>
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
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    }
  }
</script>
```
:::
</demo-block>

## 附加内容
选项卡支持添加附加内容扩展功能。

<demo-block>
::: slot source
<tabs-example6></tabs-example6>
:::

可以通过具名 slot 来实现选项卡添加附加内容
::: slot highlight
```html
<template>
      <div class = "item">
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
</template>
<script>
  export default {
    name:'TabsExample',
    data(){
      return {
        activeName:'first'
      }
    }
  }
</script>
```
:::
</demo-block>


## Tabs Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
selected|绑定值，选中选项卡的 name|String|-|-
type|选项卡的类型|String| default / card / border-card |default

## Tabs Event
参数|说明|回调参数|
:-|:-|:-|:-|:-|:-
click|选项卡被点中时触发|被选中的标签 tab 实例


## Tabs-Item Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
name|选项卡的 name|String|-|-
diasbled|是否禁用|Boolean| true / false | false


## Tabs-Pane Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
name|选项卡的 name|String|-|-

