<template>
<div>
  <div class="collapse" style = "margin-bottom:20px;">
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
  </div>
  <div class="accordion">
    <h2>手风琴效果</h2>
    <y-collapse accordion>
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
  </div>
</div>

</template>

<script>
export default {
  name:'CollapseExample'
}
</script>

<style>

</style>
