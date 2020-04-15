<template>
  <button class = "y-button" :class = "btnClass">
    <span v-if = "this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name:'y-button',
  props:{
    type:{
      type:String,
      default:'',
      validator(type){
        if(type&& !['primary','info','success','danger','warning'].includes(type)){
          throw new Error("type类型只能是['primary','info','success','danger','warning']其中一种");
        };
        return true;
      }
    }
  },
  computed:{
    btnClass(){
      let classes = [];
      if(this.type){
        classes.push('y-button-'+this.type)
      }
      return classes;
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../styles/common.scss";
$height:42px;
$font-size:14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.y-button{
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover{
      border-color:$border-color;
      background:$background;
  };
  &:focus,
  &:active{
       color:$active-color;
       border:1px solid $active-color;
       background-color:$background;
       outline:none
  };
  @each $type,$color in(
       primary:$primary,
       success:$success,
       info:$info,
       warning:$warning,
       danger:$danger
   ){
      &-#{$type}{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
   }

  @each $type,$color in(
       primary:$primary-hover,
       success:$success-hover,
       info:$info-hover,
       warning:$warning-hover,
       danger:$danger-hover
   ){
       &-#{$type}:hover{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
   }

  @each $type,$color in(
       primary:$primary-active,
       success:$success-active,
       info:$info-active,
       warning:$warning-active,
       danger:$danger-active
  ){
       &-#{$type}:active,
       &-#{$type}:focus{
           background:#{$color};
           border:1px solid #{$color};
           color:#fff;
           fill:#fff
       }
  }
}

@each $type,$color in(
    primary:$primary,
    info:$info,
    success:$info,
    warning:$info,
    error:$info){
      y-button-#{$type}{
          background:#{$color};
          border:1px solid #{$color};
          color:#fff;
          fill:#fff;
      }
}
@each $type,$color in (
    primary:'green-focue',
    success:'red'
){
  y-ui-#{$type}:focus{
    background:'#3c3c3c';
  }
}
</style>
