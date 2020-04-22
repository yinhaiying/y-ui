<template>
  <div class = "y-tabs-item" @click = "xxx" :class = "classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'y-tabs-item',
  inject:['eventBus'],
  data(){
    return {
      active:false
    }
  },
  props:{
    name:{
      type:String,
      required:true
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(name) => {
      this.active = this.name === name;
    })
  },
  computed:{
    classes(){
      return {
        "is-active":this.active
      }
    }
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.y-tabs-item{
  flex-shrink: 0;
  padding:0 2em;
  &.is-active{
    background:red;
  }
}
</style>
