<template>
  <transition >
    <div class = "y-message" :style = "positionStyle" :class = "[`y-message-${type}`]">
      <y-icon name = "info"></y-icon>
      <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name:'y-message',
  data(){
    return {
      verticalOffset:20,
      type:'info'
    }
  },
  computed:{
    positionStyle(){
      return {
        'top':`${this.verticalOffset}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$success-bgColor:#f0f9eb;
$success-borderColor:#e1f3d8;
$success-color:#67C23A;
$warning-bgColor:#fdf6ec;
$warning-borderColor:#faecd8;
$warning-color:#e6a23c;
$info-bgColor:#edf2fc;
$info-borderColor:#EBEEF5;
$info-color:#909399;
$error-bgColor:#fef0f0;
$error-borderColor:#fde2e2;
$error-color:#F56C6C;
$type-list:success,info,warning,error;
$bgcolor:$success-bgColor,$info-bgColor,$warning-bgColor,$error-bgColor;
$bordercolor:$success-borderColor,$info-borderColor,$warning-borderColor,$error-borderColor;
$color:$success-color,$info-color,$warning-color,$error-color;
.y-message {
  position:fixed;
  display:flex;
  left:50%;
  transform:translateX(-50%) translateY(-100%);
  align-items:center;
  transition:opacity .3s,top 1s;
  @each $type in $type-list{
  $i:index($type-list,$type);
    &-#{$type}{
      color: #fff;
      cursor: not-allowed;
      background-image: none;
      background-color: nth($bgcolor,$i);
      border-color: nth($bordercolor,$i);;
      color: nth($color,$i);;
    }
 }
}

</style>
