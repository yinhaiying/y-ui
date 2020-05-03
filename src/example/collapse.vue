<template>
<div>
  <!-- <div class="collapse" style = "margin-bottom:20px;">
    <h2>基础用法</h2>
    <y-collapse>
      <y-collapse-item title = "标题1">
         内容一
      </y-collapse-item>
      <y-collapse-item title = "标题2">
         内容二
      </y-collapse-item>
      <y-collapse-item title = "标题3">
         内容三
      </y-collapse-item>
    </y-collapse>
  </div> -->
  <!-- <div class="accordion" style = "margin-bottom:20px;">
    <h2>手风琴效果</h2>
    <y-collapse accordion selected = "content1">
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
  </div> -->
  <div style = "margin-bottom:20px;">
    <h2>设置默认展开</h2>
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
      {{name}}
    </y-collapse>
  </div>
</div>

</template>

<script>
export default {
  name:'CollapseExample',
  data(){
    return {
      name:['content1','content2']
    }
  }
}
</script>

<style>

</style>
