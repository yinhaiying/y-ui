## Popover


## 需求分析

Popover实现的功能就是在用户通过hover,click,focus等触发时，在附近展示一个弹出框。
也就是说popover实际上具有两个主要功能：
1. 控制内容的显示和隐藏
2. 弹出框出现的位置
其中控制内容的显示和隐藏，非常容易：
```html
<div v-if = "show">这里是弹出框的内容</div>
<button @click = "show">激活</button>
```
因此，最关键的是要控制弹出框出现的位置：也就是说我们需要把button和div两者的位置关联起来。

方法一：使用元素将两者包裹起来处理
```html
<y-popover>
  <template slot = "content">
    <div>这里是popover展示的内容</div>
  </template>
  <y-button type = "primary">激活</y-button>
</y-popover>
```
方法二：使用指令。将元素传给button
```javascript
<div ref = "content"></div>
<y-button v-popover="$refs.content">点击</y-button>
```


## 需要解决的问题
1. popover组件点击button时，点击其他地方时应该隐藏。如何监听外面的点击事件。
```javascript
showPopover(){
  this.visible = !this.visible;
  if(this.visible == true){
      let fn = () =>{
          this.visible = false;
      }
      document.body.addEventListener('click',fn);
  }
}
```
2. 监听document事件面临的冒泡问题
由于冒泡导致连续触发元素的点击和document.body监听的点击事件执行。而这两个执行
一个使得popover展示，一个使得popover关闭，因此最终没有任何的效果。我们需要取消冒泡。
```html
  <div class = "y-popover" @click.stop= "showPopper" >
    <div id = "popper" @click.stop  ref = "popper" class = "content-wrapper" v-if = "visible">
      <slot name = "content"></slot>
    </div>
      <slot></slot>
  </div>
```

3. 监听document.body的事件面临的高度问题。
如果document.body的高度很小不是占据全屏的，那么我们点击document.body以外的区域无法控制隐藏。
隐藏我们需要监听整个文档，为不仅仅是高度区域。
```javascript
showPopover(){
  this.visible = !this.visible;
  if(this.visible == true){
      let fn = () =>{
          this.visible = false;
      }
      document.addEventListener('click',fn);
  }
}
```
4. 解决多次点击document，没有移除之前document身上的监听器，导致监听器累加。
```javascript
showPopover (){
  this.visible = !this.visible;
  if(this.visible == true){
      let fn = () =>{
          this.visible = false;
          document.removeEventListener('click',fn)
      }
      document.addEventListener('click',fn);
  }
}
```
5. y-popover外的包裹组件为overflow:hidden时的不可见问题。
由于我们展示的内容，通常是在元素的外面，比如顶部，右侧，底部，左侧等。
这时候，如果外面的包裹元素设置为overflow:hidden,那么这时候会导致
弹出框的内容不可见。也就是说我们不能把弹出框放到跟按钮一个层级。最好把它
放到最外层，作为body的子元素。
```javascript
    showPopover (){
      this.visible = !this.visible;
      if(this.visible == true){
        this.$nextTick(() => {
          // 确保$refs已经存在，然后把它添加到body身上
          document.body.appendChild(this.$refs.popper);
        })
        let fn = () =>{
            this.visible = false;
            document.removeEventListener('click',fn)
        }
        document.addEventListener('click',fn);
      }
    }
```
虽然，我们把弹出框放到body下面了，但是这会导致弹出框和触发器相对位置发生变化。
因此，我们需要线获取到触发器的位置，然后设置弹出框的位置。
```javascript
setPosition(){
    // 确保$refs已经存在，然后把它添加到body身上
    document.body.appendChild(this.$refs.popper);
    let triggerWrapperInfo = this.$refs.triggerWrapper.getBoundingClientRect();
    let popoverInfo = this.$refs.popper.getBoundingClientRect();
    this.$refs.popper.style.left = triggerWrapperInfo.left + 'px';
    this.$refs.popper.style.top = triggerWrapperInfo.top -  popoverInfo.height  + 'px';
}
```
6、使用绝对定位带来的问题。我们获取的left、top等值都是相对于可视区的值。但是弹窗框最终设置的left、top等值
都是相对于document进行绝对定位。当页面长度在可视区内时不会出现问题，但是如果页面超出可视区，那么会多出一个滚动高度。
```javascript
setPosition(){
    // 确保$refs已经存在，然后把它添加到body身上
    document.body.appendChild(this.$refs.popper);
    let triggerWrapperInfo = this.$refs.triggerWrapper.getBoundingClientRect();
    let popoverInfo = this.$refs.popper.getBoundingClientRect();
    this.$refs.popper.style.left = triggerWrapperInfo.left + window.scrollX + 'px';
    this.$refs.popper.style.top = triggerWrapperInfo.top + window.scrollY -  popoverInfo.height  + 'px';
}
```
7、使用.stop阻止冒泡带来的新的问题。我们为了监听document身上的事件，阻止了触发器的事件冒泡，但是这带来了新的问题。假如我们使用时外面包裹元素
绑定了点击事件，那么在点击触发器时将不会执行。
```html
<div @click = "xxx"> <!--这里的click事件，在点击button时不会执行 -->
  <y-popover>
    <template slot = "content">
      <div>这里是popover展示的内容</div>
    </template>
    <y-button type = "primary">激活</y-button>
  </y-popover>
</div>
```

8. 各种样式需要考虑的问题：
1、如果内容区域文字很长，会导致占领整行之后才会换行，显得比较丑，因此需要设置最大宽度：max-width:20em
2、由于设置了最大宽度，如果是一个很长的英文单词，会导致文字溢出。需要设置 word-break: break-all;
3、内容区域有box-shadow,但是小三角区域没有，而且无法直接给小三角加上box-shadow。
  解决方法：使用filter: drop-shadow()替代box-shadow
  ```
  filter:drop-shadow(0 0 3px rgba(0,0,0,0.1));
  background:#fff;
  ```

## 动态绑定事件
popover需要支持click、hover等事件，需要通过js手动绑定，不能直接使用@同时绑定多个事件
```javascript
if(this.trigger === 'click'){
  this.$refs.popover.addEventListener('click',this.onClick)
}else{
  this.$refs.popover.addEventListener('mouseenter',this.open);
  this.$refs.popover.addEventListener('mouseleave',this.close);
}
```
对于自己手动绑定的事件，需要在destroyed中进行移除
```javascript


```
