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
      name:['content1']
    }
  }
}
</script>
