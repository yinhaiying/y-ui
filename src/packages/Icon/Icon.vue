<template>
   <svg class="icon" :class = "[name == 'loading' ? 'icon-loading':'']" aria-hidden="true">
     <use :xlink:href="`#i-${name}`"></use>
   </svg>
</template>


<script>
import "./icon.js";
export default {
  name:'y-icon',
  props:{
    name:{
      type:String
    }
  }
}
</script>

<style lang = "scss">
    @keyframes spin{
      0%{
        transform:rotate(0deg);
      }
      100%{
        transform:rotate(360deg);
      }
    }
    .icon {
       width: 1em;
       height:1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       &-loading{
         animation:spin 1s infinite linear;
       }
    }
</style>
