import Vue from 'vue';
import Main from './main.vue';
// 通过继承得到一个Vue对象
let MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];  // 如果创建多个instance,分别形成队列

function Message(options){
  if(typeof options === 'string'){
    options = {
      message:options
    };
    options = Object.assign({
      type:'info',
      message:''
    },options)
  };
  // 实例化继承得到的构造器，然后传入的参数options转化成data数据。
  instance = new MessageConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  let verticalOffset = options.offset || 20;
  instances.push(instance);
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;
    item.verticalOffset = verticalOffset;
  })
  console.log(instance);
}


export default Message;
