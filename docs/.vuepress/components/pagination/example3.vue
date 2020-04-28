<template>
  <div class="pageination">
    <span>hide-on-single-page为true时不展示pagintion</span>
    <y-pagination :total-page = "totalPage" :current-page = "currentPage"
                  :hide-on-single-page = "value" @page-change = "pageChange"></y-pagination>
  </div>

</template>

<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:1,
      currentPage:1,
      value:true
    }
  },
  methods:{
    pageChange(value){
      console.log('page:'+value)
      this.currentPage = value;
    }
  }
}
</script>

<style>

</style>
