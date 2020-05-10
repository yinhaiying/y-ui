# Carousel组件
在有限空间内，循环播放同一类型的图片、文字等内容
## 基础用法
适用广泛的基础用法

<demo-block>
::: slot source
<carousel-example1></carousel-example1>
:::

Carousel组件通过y-carousel和y-carousel-item来实现。initial-index表示默认展示的内容。

::: slot highlight
```html
<template>
  <div class = "y-carousel-example">
      <y-carousel :initialIndex = "initialIndex">
          <y-carousel-item >
              <div class="wrapper">0</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">1</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">2</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">3</div>
          </y-carousel-item>
      </y-carousel>
  </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      initialIndex:0,
    };
  }
};
</script>
<style lang="scss" scoped>
.y-carousel-example{
  width:300px;
}
.wrapper{
    width:300px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:38px;
    font-weight:bold;
    background:#A5B3C7;
}
</style>

```
:::
</demo-block>

## 自动轮播
Carousel 组件支持自动轮播。

<demo-block>
::: slot source
<carousel-example2></carousel-example2>
:::

通过传入autoPlay属性可以实现自动轮播，默认是自动播放的，默认间隔时间是3000ms。

::: slot highlight
```html
<template>
  <div class = "y-carousel-example">
      <y-carousel :initialIndex = "initialIndex" :autoPlay = "autoPlay">
          <y-carousel-item >
              <div class="wrapper">0</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">1</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">2</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">3</div>
          </y-carousel-item>
      </y-carousel>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initialIndex:0,
      autoPlay:true
    };
  }
};
</script>
<style lang="scss" scoped>
.y-carousel-example{
  width:300px;
}
.wrapper{
    width:300px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:38px;
    font-weight:bold;
    background:#A5B3C7;
}
</style>

```
:::
</demo-block>

## 反向轮播
Carousel 组件支持自动轮播。

<demo-block>
::: slot source
<carousel-example3></carousel-example3>
:::

通过传入reverse属性可以实现反向轮播。

::: slot highlight
```html
<template>
  <div class = "y-carousel-example">
      <y-carousel :initialIndex = "initialIndex" :autoPlay = "autoPlay" :reverse = "reverse">
          <y-carousel-item >
              <div class="wrapper">0</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">1</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">2</div>
          </y-carousel-item>
          <y-carousel-item>
              <div class="wrapper">3</div>
          </y-carousel-item>
      </y-carousel>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initialIndex:0,
      autoPlay:true,
      reverse:true
    };
  }
};
</script>
<style lang="scss" scoped>
.y-carousel-example{
  width:300px;
}
.wrapper{
    width:300px;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:38px;
    font-weight:bold;
    background:#A5B3C7;
}
</style>

```
:::
</demo-block>



## Carousel Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
initial-index|初始状态激活的幻灯片的索引，从 0 开始|Number|-|0
autoPlay|是否自动播放|Boolean| true / false | true
interval|幻灯片切换的间隔时间|Number| - | 3000
reverse|是否反向轮播|Boolean| true / false | false
