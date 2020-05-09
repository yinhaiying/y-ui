## carousel
怎么让多个元素水平排列，同时窗口宽高是一个元素的宽高。
1. 水平排列
2. 窗口宽度 = 单个元素的宽高
3. 超出窗口区域的盒子隐藏
方法一：
子元素设置display:inline-block实现水平排列，然后父元素由于宽度是各个子元素的和，而不是单个元素的宽度。
因此，需要我们手动去通过DOM设置窗口的宽高为单个元素的宽高，然后使用overflow:hidden隐藏其他的元素。
但是在Vue中去操作DOM不太好。我们最好能够用CSS的方式来实现。
方法二：使用Vue的动画来实现。
首先Vue的动画需要v-if时使用。我们通过判断传入的activeIndex和当前元素所属的index是否相等。如果相等就让他显示，如果不相等就让他隐藏。
```javascript
this.$children.forEach((vm,index) => {
if(index === this.activeIndex){
    vm.visible = true;
}else{
    vm.visible = false;
}
})
```
然后我们就可以在控制进入和离开时加入过渡动画，将隐藏的元素进行绝对定位，并且隐藏是放到-100%处，
而进入时放到100%出。这样就可以实现无缝的效果。
```css
.slide-enter-active,.slide-leave-active{
    transition:all 2s;
}
.slide-enter{
    transform:translateX(100%);  // 让要进入的元素排在当前显示的后面。
}
.slide-leave-to{
    transform:translateX(-100%);// 让要离开的元素滑到看不见的地方。
}
.slide-leave-active{
    position:absolute;
    left:0;
    top:0;
    z-index:-1; // 让要隐藏的元素不可见
}
```