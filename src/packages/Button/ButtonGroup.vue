<template>
   <span class = "y-button-group">
     <slot></slot>
   </span>
</template>


<script>
export default {
  name:'y-button-group'
}
</script>

<style lang="scss" scoped>
.y-button-group{
  .y-button{
    &:first-child{
      border-right-color:hsla(0,0%,100%,.5);
      border-top-right-radius:0;
      border-bottom-right-radius:0;
    }
    &:last-child{
      margin-left:-1px;
      border-left-color:hsla(0,0%,100%,.5);
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    }
    &:not(:first-child):not(:last-child){
      margin-left:-1px;
      border-left-color: hsla(0,0%,100%,.5);
      border-right-color: hsla(0,0%,100%,.5);
      border-radius:0;
    }
  }
}
</style>
