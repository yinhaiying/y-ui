<template>
  <div class="pageination">
    <y-pagination :total-page = "totalPage" :current-page = "currentPage"
                   @page-change = "pageChange" background></y-pagination>
  </div>
</template>
<script>
export default {
  name:'PaginationExample',
  data(){
    return {
      totalPage:100,
      currentPage:10,
    }
  },
  methods:{
    pageChange(value){
      this.currentPage = value;
    }
  }
}
</script>
