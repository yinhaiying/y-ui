<template>
  <div class="y-pagination">
    <span class = "y-pagination-item" :class = "{'prev-disabled': currentPage === 0}" @click = "$emit('page-change',currentPage - 1 >= 0 ? currentPage - 1 :0)"><y-icon name = "left"></y-icon></span>
    <span class = "y-pagination-item"
          :class = "[item === currentPage ? 'active' :'' ]"
          v-for = "(item,index) in pages" :key = "index"
          @click = "onClick(item,index)"
          >{{item}}</span>
    <span class = "y-pagination-item" :class = "{'next-disabled': currentPage === totalPage}" @click = "$emit('page-change',totalPage - currentPage > 0 ? currentPage + 1 :totalPage)"><y-icon name = "right"></y-icon></span>
  </div>
</template>

<script>
import {unique} from '@/utils/util.js'
export default {
  name:'y-pagination',
  data(){
    return {};
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
  },
  computed:{
    pages(){
      // TODO:这里需要优化一下代码。
      let pagesArr = [0,this.currentPage,this.totalPage];
      if(this.currentPage > 2 && this.totalPage - this.currentPage > 2){
        pagesArr.push(this.currentPage-1,this.currentPage-2,this.currentPage+1,this.currentPage+2)
      }else if(this.currentPage <= 2){
        if(this.currentPage === 2){
          pagesArr.push(this.currentPage-1,this.currentPage+1,this.currentPage+2,this.currentPage+3)
        }else if(this.currentPage === 1){
          pagesArr.push(this.currentPage+1,this.currentPage+2,this.currentPage+3,this.currentPage + 4)
        }else if(this.currentPage === 0){
          pagesArr.push(this.currentPage+1,this.currentPage+2,this.currentPage+3,this.currentPage + 4,this.currentPage + 5)
        }
      }else if(this.totalPage - this.currentPage <= 2){
        if(this.totalPage - this.currentPage === 2){
          pagesArr.push(this.currentPage - 3,this.currentPage-2,this.currentPage-1,this.currentPage+1);
        }else if(this.currentPage === this.totalPage - 1){
          pagesArr.push(this.currentPage-4,this.currentPage-3,this.currentPage-2,this.currentPage-1)
        }else if(this.currentPage === this.totalPage){
          pagesArr.push(this.currentPage - 5,this.currentPage -4 ,this.currentPage-3,this.currentPage-2,this.currentPage-1)
        }
      }
      pagesArr = unique(pagesArr).sort((a,b) => a-b);
      let pages = [];
      for(let i = 0;i < pagesArr.length;i++){
        let flag = pagesArr[i] <= this.totalPage && pagesArr[i] >= 0;
        if(pagesArr[i+1] && pagesArr[i+1] - pagesArr[i] > 1 && flag){
          if(pagesArr[i] <= this.totalPage || pagesArr[i] >= 0){
            pages.push(pagesArr[i]);
            pages.push('...');
          }
        }else if(flag){
          pages.push(pagesArr[i]);
        }
      };
      return pages
    }
  },
  methods:{
    onClick(page,index){
      let isRight = this.pages[index-1] - this.currentPage > 0 ? true :false;
      let diff;
      if(page === '...' && isRight ){
        diff = this.totalPage - this.currentPage;
        page = diff >= 5 ?this.currentPage + 5 :this.currentPage + diff;
      }else if (page === '...' && !isRight){
        diff = this.currentPage - 0;
        page = diff >=5 ? this.currentPage - 5:this.currentPage - diff;
      }
      this.$emit('page-change',page)
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
    &:hover{
      color:#409eff;
    }
    &.active{
      background:#409eff;
      color:#fff;
      cursor: default;
    }
    &.prev-disabled,&.next-disabled{
      cursor:not-allowed;
      color:#c0c4cc;
    }
  }
}
</style>
