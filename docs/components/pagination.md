# Pagination组件
当数据量过多时，使用分页分解数据。
## 基础用法
当页数较少时的效果（总页数少于5页）,默认全部展示。

<demo-block>
::: slot source
<pagination-example1></pagination-example1>
:::
当页数较少时，pagination默认展示所有，total-page表示所有页数(必传)，current-page:表示当前页数(默认值为1)。
::: slot highlight
```html
<template>
  <div class="pageination">
    <y-pagination :total-page = "totalPage" :current-page = "currentPage" @page-change = "pageChange"></y-pagination>
  </div>
</template>
<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:5,
      currentPage:3
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
```
:::
</demo-block>

## 设置展示的页码数
当页数较多时的效果，可以设置想要展示的页码数。

<demo-block>
::: slot source
<pagination-example2></pagination-example2>
:::

当页数较多时，pagination展示的页数受pagerCount属性控制，默认值为5（展示包括初始页1和总页数totalPage共7页）
::: slot highlight
```html
<template>
  <div class="pageination">
    <y-pagination :pager-count = "pagerCount" :total-page = "totalPage" :current-page = "currentPage" @page-change = "pageChange"></y-pagination>
  </div>
</template>
<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:100,
      currentPage:10,
      pagerCount:7
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
```
:::
</demo-block>

## 当只有一页时隐藏分页
当页数较多时的效果，可以设置想要展示的页码数。

<demo-block>
::: slot source
<pagination-example3></pagination-example3>
:::

当页数较多时，pagination展示的页数受pagerCount属性控制，默认值为5（展示包括初始页1和总页数totalPage共7页）
::: slot highlight
```html
<template>
  <div class="pageination">
    <y-pagination :pager-count = "pagerCount" :total-page = "totalPage" :current-page = "currentPage" @page-change = "pageChange" :hide-on-single-page = "value"></y-pagination>
  </div>
</template>
<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:1,
      currentPage:1,
      value:false
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
```
:::
</demo-block>

## 设置带有背景色的分页
设置带有背景色的分页

<demo-block>
::: slot source
<pagination-example4></pagination-example4>
:::

设置background属性可以为分页按钮添加背景色
::: slot highlight
```html
<template>
  <div class="pageination">
    <y-pagination :total-page = "totalPage" :current-page = "currentPage"
                   @page-change = "pageChange" background></y-pagination>
  </div>
</template>
<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:1,
      currentPage:1,
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
```
:::
</demo-block>


## Attribute
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
total-page|总页数(必传)| Number / String |-|-
current-page|当前页(必须小于等于总页数)|Number / String | - |1
pager-count|页码按钮的数量，当总页数超过该值时会折叠|大于等于 5 且小于等于 21 的奇数 | - |5
hide-on-single-page|当只有一页时是否隐藏分页|true / false | - | false
background|为分页设置背景色|true / false | - | false

##  Event
参数|说明|回调参数|
:-|:-|:-|:-|:-|:-
page-change|页码改变时会触发|被选中的页码



