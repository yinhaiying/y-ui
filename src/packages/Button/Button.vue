<template>
  <button  class = "y-button" :class = "btnClass" :disabled = "disabled"  @click = "$emit('click',$event)">
    <y-icon :name = icon v-if = "icon && icon !== 'loading'"></y-icon>
    <y-icon :name = icon v-if = "icon && icon === 'loading'"></y-icon>
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
    },
    disabled:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String
    },
    iconPosition:{
      type:String,
      default:'left',
      validator(value){
        if(!['left','right'].includes(value)){
          throw new Error('icon-position只能为left或者right')
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
      }else{
       classes.push('y-button-default');
      }
      if(this.disabled){classes.push('is-disabled');}
      if(this.round){classes.push('is-round');}
      if(this.iconPosition){classes.push(`y-button-${this.iconPosition}`)}
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
  $type-list:default,primary,success,info,warning,danger;
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
           color:#fff;
           background:#{$color};
           border:1px solid #{$color};
           fill:#fff;
       }
  }
  $disable-bgcolor:$default-disabled-bgcolor,$primary-disabled-bgcolor,$success-disabled-bgcolor,$info-disabled-bgcolor,$warning-disabled-bgcolor,$danger-disabled-bgcolor;
  $disable-bordercolor:$default-disabled-bordercolor,$primary-disabled-bordercolor,$success-disabled-bordercolor,$info-disabled-bordercolor,$warning-disabled-bordercolor,$danger-disabled-bordercolor;
  $disable-color:$default-disabled-color,$primary-disabled-color,$success-disabled-color,$info-disabled-color,$warning-disabled-color,$danger-disabled-color;
  @each $type in $type-list{
    $i:index($type-list,$type);
    &-#{$type}.is-disabled,&-#{$type}.is-disabled:active,&-#{$type}.is-disabled:hover{
      color: #fff;
      cursor: not-allowed;
      background-image: none;
      background-color: nth($disable-bgcolor,$i);
      border-color: nth($disable-bordercolor,$i);;
      color: nth($disable-color,$i);;
    }
  }
  @each $type in $type-list{
    $i:index($type-list,$type);
    &-#{$type}.is-round{
      border-radius:20px;
    }
  }

  &-left{
    svg{
      order:1;
      margin-right:0.3em;
    }
    span{
      order:2;
    }
  }
  &-right{
    svg{
      order:2;
      margin-left:0.3em;
    }
    span{
      order:1;
    }
  }
}
</style>
