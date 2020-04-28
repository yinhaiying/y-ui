<template>
  <div class="pageination">
    <y-pagination :total-page = "totalPage" :current-page = "currentPage" @page-change = "pageChange"></y-pagination>
  </div>

</template>

<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:20,
      currentPage:6
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>

<style>

</style>
