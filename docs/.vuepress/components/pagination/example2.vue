<template>
  <div class="pageination">
    <y-pagination :pagerCount = "pagerCount" :total-page = "totalPage" :current-page = "currentPage" @page-change = "pageChange"></y-pagination>
  </div>

</template>

<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:100,
      currentPage:10,
      pagerCount:7
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
