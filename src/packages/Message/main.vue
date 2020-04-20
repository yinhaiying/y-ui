<template>
  <transition name = "y-message-fade" @after-leave="handleAfterLeave">
    <div v-show = "visible" class = "y-message" :style = "positionStyle" :class = "[`y-message-${type}`,showClose ? 'is-closable' : '']">
      <y-icon name = "info"></y-icon>
      <p class= "y-message-content">{{message}}</p>
      <span @click = "close" v-if = "showClose" class = "y-message-close"><y-icon name = "close"></y-icon></span>
    </div>
  </transition>
</template>

<script>
export default {
  name:'y-message',
  data(){
    return {
      visible:false,
      verticalOffset:20,
      zIndex:10000,
      type:'info',
      message:'',
      showClose:false,
      onClose:null,
      isClosed:false,
      duration:0
    }
  },
  computed:{
    positionStyle(){
      return {
        'top':`${this.verticalOffset}px`,
        'z-index':`${this.zIndex}`
      }
    }
  },
  mounted(){
    this.startTimer();
  },
  methods:{
    close(event){
      this.isClosed = true;
      this.visible = false;
      this.onClose();
      this.zIndex = -10000;
    },
    startTimer(){
      if(this.duration > 0){
        this.timer = setTimeout(() => {
          if(!this.isClosed){
            this.onClose();
            this.visible = false;
          }
        },this.duration)
      }
    },
    clearTimer(){
      clearTimeout(this.timer);
    },
    handleAfterLeave(el,done){
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
      this.clearTimer();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/common.scss";
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
  font-size:16px;
  line-height: 1;
  padding:15px 15px 15px 20px;
  min-width:380px;
  &-content{
    margin-left:5px;
  }
  @each $type in $type-list{
    $i:index($type-list,$type);
    &-#{$type}{
      color: #fff;
      background-image: none;
      background-color: nth($bgcolor,$i);
      border-color: nth($bordercolor,$i);;
      color: nth($color,$i);;
    }
 }
 &-close{
   position:absolute;
   top:50%;
   right:15px;
   transform:translateY(-50%);
   cursor:pointer;
   color:#C0C4CC;
   font-size:16px
 }
 &.is-closable{
   top:-20px;
 }
}

// .y-message-fade-enter,.y-message-fade-leave-active{
//   opacity:0;
//   -webkit-transform:translate(-50%,-100%);
//   transform:translate(-50%,-100%)
// }

</style>
