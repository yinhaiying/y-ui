# Message组件
Message组件的用法
## 基础用法
从顶部出现，3 秒后自动消失。

<demo-block>
::: slot source
<message-example1></message-example1>
:::

Message组件注册了一个$message方法用于调用，该方法可以接收一个字符串或一个HTML作为参数，它会被显示为正文内容。
同时可以通过配置options参数进行其他设置。
::: slot highlight
```html
<template>
  <y-button  @click = "open">打开消息提示</y-button>
</template>
<script>
export default {
  name:'MessageExample',
  methods:{
    open(){
      this.$message('这是一条消息提示');
    }
  }
}
</script>
```
:::
</demo-block>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<demo-block>
::: slot source
<message-example2></message-example2>
:::

在调用$message方法时，options参数对象中可以传入type字段来定义操作的反馈类型，支持：success、warning、info和danger四种状态。
::: slot highlight
```html
<template>
  <div>
    <y-button  @click = "open1" type = "success">成功</y-button>
    <y-button type = "warning" @click = "open2">警告</y-button>
    <y-button type = "info" @click = "open3">消息</y-button>
    <y-button type = "danger" @click = "open4">错误</y-button>
  </div>
</template>

<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      this.$message({
        message:'恭喜你，这是一条成功的消息',
        type:'success',
        showClose:true,
      });
    },
    open2(){
      this.$message({
        message:'警告哦，这是一条警告的消息',
        type:'warning',
        showClose:true,
      });
    },
    open3(){
      this.$message({
        message:'这是一条消息',
        type:'info',
        showClose:true,
      });
    },
    open4(){
      this.$message({
        message:'这是一条消息报错的消息',
        type:'error',
        showClose:true,
      });
    }
  }
}
</script>
```
:::
</demo-block>

## 可关闭
可以添加关闭按钮手动关闭消息提示

<demo-block>
::: slot source
<message-example3></message-example3>
:::

在调用$message方法时，options参数对象中可以通过传入showClose字段来实现关闭。
::: slot highlight
```html
<template>
  <div>
    <div>
      <y-button type = "success" @click = "open1" >成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      this.$message({
        message:'恭喜你，这是一条成功的消息',
        type:'success',
      });
    },
    open2(){
      this.$message({
        message:'警告哦，这是一条警告的消息',
        type:'warning',
      });
    },
    open3(){
      this.$message({
        message:'这是一条消息',
        type:'info',
      });
    },
    open4(){
      this.$message({
        message:'这是一条消息报错的消息',
        type:'error',
      });
    }
  }
}
</script>
```
:::
</demo-block>

## 文字居中
可以使用center来定义文字居中

<demo-block>
::: slot source
<message-example4></message-example4>
:::

在调用$message方法时，options参数对象中可以通过传入center字段来实现文字居中。
::: slot highlight
```html
<template>
  <div>
    <div>
      <y-button type = "success" @click = "open1" >成功</y-button>
      <y-button type = "warning" @click = "open2">警告</y-button>
      <y-button type = "info" @click = "open3">消息</y-button>
      <y-button type = "danger" @click = "open4">错误</y-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      this.$message({
        message:'恭喜你，这是一条成功的消息',
        type:'success',
        center:true
      });
    },
    open2(){
      this.$message({
        message:'警告哦，这是一条警告的消息',
        type:'warning',
        center:true
      });
    },
    open3(){
      this.$message({
        message:'这是一条消息',
        type:'info',
        center:true
      });
    },
    open4(){
      this.$message({
        message:'这是一条消息报错的消息',
        type:'error',
        center:true
      });
    }
  }
}
</script>
```
:::
</demo-block>

## 使用HTML片段
可以传入HTML来定义消息内容

<demo-block>
::: slot source
<message-example5></message-example5>
:::

在调用$message方法时，options参数对象中message字段支持传入HTML来定义消息内容。
将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
::: slot highlight
```html
<template>
  <div>
    <y-button  @click = "open1" type = "success">成功</y-button>
    <y-button type = "warning" @click = "open2">警告</y-button>
    <y-button type = "info" @click = "open3">消息</y-button>
    <y-button type = "danger" @click = "open4">错误</y-button>
  </div>
</template>

<script>
export default {
  name:'MessageExample',
  methods:{
    open1(){
      this.$message({
        message:'恭喜你，<span>这是一条成功的消息</span>',
        type:'success',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open2(){
      this.$message({
        message:'警告，<span>，这是一条警告的消息</span>',
        type:'warning',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open3(){
      this.$message({
        message:'Hi，<span>，这是一条普通的消息</span>',
        type:'info',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    },
    open4(){
      this.$message({
        message:'糟糕，<span>，这是一条报错的消息</span>',
        type:'error',
        showClose:true,
        dangerouslyUseHTMLString:true,
      });
    }
  }
}
</script>
```
:::
</demo-block>

## Options
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type|类型|String|info / success / warning / danger|info
showClose|是否展示关闭|Boolean| true / false |false
duration|展示时间，单位毫秒，设为0则不会关闭|Number| - |3000
center|文字居中|Boolean | true / false | false
dangerouslyUseHTMLString |是否使用HTML片段|Boolean | true / false | false
offset |消息框距离顶部距离|Number | - | 20
onClose |关闭时的回调函数，参数为message实例|Function | - | -

