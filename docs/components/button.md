# Button组件
常用的操作按钮。
## 基础用法
基础的按钮用法。

<demo-block>
::: slot source
<button-example1></button-example1>
:::

使用`<y-button>`标签来定义按钮。使用type属性来定义 Button 的样式。

::: slot highlight
```html
<div>
    <y-button>默认按钮</y-button>
    <y-button type="primary">主要按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="info">信息按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">危险按钮</y-button>
</div>
```
:::
</demo-block>

## 禁用按钮
禁用按钮用法。

<demo-block>
::: slot source
<button-example2></button-example2>
:::

使用disabled属性来定义Button的禁用样式。

::: slot highlight
```html
    <y-button disabled>默认按钮</y-button>
    <y-button type = "primary" disabled>主要按钮</y-button>
    <y-button type = "info" disabled>信息按钮</y-button>
    <y-button type = "success" disabled>成功按钮</y-button>
    <y-button type = "warning" disabled>警告按钮</y-button>
    <y-button type = "danger" disabled>危险按钮</y-button>
```
:::
</demo-block>




## 圆角按钮
可以使用圆角按钮

<demo-block>
::: slot source
<button-example3></button-example3>
:::

使用round属性来定义圆角按钮的样式。

::: slot highlight
```html
<div>
    <y-button round>默认按钮</y-button>
    <y-button type = "primary" round >主要按钮</y-button>
    <y-button type = "info" round>信息按钮</y-button>
    <y-button type = "success" round>成功按钮</y-button>
    <y-button type = "warning" round>警告按钮</y-button>
    <y-button type = "danger" round>危险按钮</y-button>
</div>
```
:::
</demo-block>


## 图标按钮
带图标的按钮可增强辨识度

<demo-block>
::: slot source
<button-example4></button-example4>
:::

使用icon属性来定义展示的图标，通过icon-position属性来定义图标的位置。

::: slot highlight
```html
<div>
    <y-button round icon = "settings" icon-position = "left">默认按钮</y-button>
    <y-button type = "primary" round icon = "settings" icon-position = "right">主要按钮</y-button>
    <y-button type = "info"    round icon = "settings">设置</y-button>
    <y-button type = "success" round icon = "download" icon-position = "right">下载</y-button>
    <y-button type = "warning" round icon = "down">展开</y-button>
    <y-button type = "danger"  round icon = "error">危险按钮</y-button>
</div>
```
:::
</demo-block>

## 加载中

要设置为 loading 状态，只要设置icon属性为loading即可。

<demo-block>
::: slot source
<button-example5></button-example5>
:::

要设置为 loading 状态，只要设置icon属性为loading即可。

::: slot highlight
```html
    <y-button round icon = "loading">加载中</y-button>
    <y-button type = "primary" round icon = "loading">加载中</y-button>
    <y-button type = "info" round icon = "loading">加载中</y-button>
    <y-button type = "success" round icon = "loading">加载中</y-button>
    <y-button type = "warning" round icon = "loading">加载中</y-button>
    <y-button type = "danger" round icon = "loading">加载中</y-button>
```
:::
</demo-block>


## 按钮组
以按钮组的方式出现，常用于多项类似操作。


<demo-block>
::: slot source
<button-example6></button-example6>
:::

使用`<y-button-group>`标签来嵌套你的按钮。

::: slot highlight
```html
    <y-button-group style = "margin-right:20px">
      <y-button type = "primary" icon = "left"  @click="onClick">上一页</y-button>
      <y-button type = "primary" icon = "right" icon-position = "right"  @click="onClick">下一页</y-button>
    </y-button-group>

    <y-button-group>
      <y-button type = "primary" icon = "settings"  @click="onClick">111</y-button>
      <y-button type = "primary" icon = "settings"  @click="onClick">222</y-button>
      <y-button type = "primary" icon = "settings"  @click="onClick">333</y-button>
    </y-button-group>
```
:::
</demo-block>


## Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type|类型|String|primary / success / warning / danger / info |default
disabled|是否禁用按钮|Boolean| true / false |false
round|是否圆角按钮|Boolean| true / false |false
icon|图标类名|string | - | -
icon-position|图标位置|string | left / right | left
