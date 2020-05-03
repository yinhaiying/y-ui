<template>
  <div class="y-collapse-item" :class = "{'is-open':open}">
    <div class="title" @click = "open = !open">
      {{title}}
    </div>
    <div class="content" v-if = "open">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name:'y-collapse-item',
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      open:false
    }
  }
}
</script>

<style lang="scss" scoped>
.y-collapse-item{
  >.title{
    border:1px solid #ddd;
    min-height:32px;
    display:flex;
    align-items: center;
    padding-left:10px;
    margin:-1px;
  }
  // &:not(:first-child){
  //   >.title{
  //    border-top:none;
  //   }
  // }
  &:first-child{
    >.title{
      border-top-left-radius:4px;
      border-top-right-radius:4px;
    }
  }
  &:last-child{
    >.title{
      border-bottom-left-radius:4px;
      border-bottom-right-radius:4px;
    }
  }
  &.is-open:last-child{
    >.title{
      border-radius:0;
    }
  }
  >.content{
    padding-left:10px;
    min-height:32px;
    display:flex;
    align-items: center;
  }
}
</style>
