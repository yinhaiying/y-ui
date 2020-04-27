<template>
  <div class="y-pagination">
    <span class = "y-pagination-item" :class = "[item === currentPage ? 'active' :'' ]" v-for = "(item,index) in pages" :key = "index">{{item}}</span>
  </div>
</template>

<script>
import {unique} from '@/utils/util.js'
export default {
  name:'y-pagination',
  data(){
    let pagesArr = [0,this.totalPage,this.currentPage,this.currentPage-1,this.currentPage-2,this.currentPage+1,this.currentPage+2];
    pagesArr = unique(pagesArr).sort((a,b) => a-b);
    let pages = [];
    for(let i = 0;i < pagesArr.length;i++){
      if(pagesArr[i+1] && pagesArr[i+1] - pagesArr[i] > 1){
        pages.push(pagesArr[i]);
        pages.push('...');
      }else{
        pages.push(pagesArr[i]);
      }
    };
    return {
      pages
    }
  },
  props:{
    totalPage:{
      type:[Number,String],
      default:1
    },
    currentPage:{
      type:[Number,String],
      default:0
    }
  }
}
</script>

<style lang="scss" scoped>
.y-pagination{
  &-item{
    min-width: 30px;
    margin: 0px 5px;
    border-radius: 2px;
    border:1px solid #ddd;
    box-sizing: border-box;
    text-align: center;
    padding: 0px 4px;
    background: rgb(255, 255, 255);
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    font-weight:700;
    cursor: pointer;
    &.active{
      background:#409eff;
      color:#fff;
    }
  }
}
</style>
