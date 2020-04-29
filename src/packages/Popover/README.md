## Popover


## 需求分析

Popover实现的功能就是在用户通过hover,click,focus等触发时，在附近展示一个弹出框。
也就是说popover实际上具有两个主要功能：
1. 控制内容的显示和隐藏
2. 弹出框出现的位置
其中控制内容的显示和隐藏，非常容易：
```html
<div v-if = "show">这里是弹出框的内容</div>
<button @click = "show">激活</button>
```
因此，最关键的是要控制弹出框出现的位置：也就是说我们需要把button和div两者的位置关联起来。

方法一：使用元素将两者包裹起来处理
```html
<y-popover>
  <template slot = "content">
    <div>这里是popover展示的内容</div>
  </template>
  <y-button type = "primary">激活</y-button>
</y-popover>
```
方法二：使用指令。将元素传给button
```javascript
<div ref = "content"></div>
<y-button v-popover="$refs.content">点击</y-button>
```
