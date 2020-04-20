import Vue from 'vue';
import Main from './main.vue';
// 通过继承得到一个Vue对象
let MessageConstructor = Vue.extend(Main);
let instance;
let instances = [];  // 如果创建多个instance,分别形成队列
let seed = 1;
let verticalOffset;
function Message(options){
  options = options || {};
  if(typeof options === 'string'){
    options = {
      message:options
    };
  };
  let id = 'message_' + seed++;
  let userOnClose = options.onClose;
  options.onClose = function() {
    Message.close(id,userOnClose);
  };
  // 实例化继承得到的构造器，然后传入的参数options转化成data数据。
  instance = createInstance(options,id);

  // 多个message放入一个数组队列中进行处理
  instances = multiInstance(instance);
}

function createInstance(options,id){
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.visible = true;
  instance.$mount();
  document.body.appendChild(instance.$el);
  verticalOffset = options.offset || 20;
  return instance;
}
// 多个message的处理
function multiInstance(instance){
  instances.push(instance);
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;
    item.verticalOffset = verticalOffset;
  });
  return instances;
}

Message.close = function(id,userOnClose){
  let len = instances.length;
  let index = -1;
  let removedInstanceHeight;
  let dom;
  for(let i = 0;i < len;i++){
    if(instances[i].id === id){
      index = i;
      dom = instances[i].$el;
      if(typeof userOnClose === 'function'){
        userOnClose(instances[i]);
      }
      removedInstanceHeight = dom.offsetHeight;
      if(index === 0){
        dom.style['top'] =0;
      }
      if(index === len -1 && len > 1){
        dom.style['top'] = parseInt(getComputedStyle(dom).top) - removedInstanceHeight - 16 + 'px';
      }
      instances.splice(i, 1);
      break;
    }
  };
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  // 前面的元素样式不变，后面的元素都减少删除元素高度 + 16
  for (let i = index; i < len-1; i++) {
    let dom = instances[i].$el;
    dom.style['top'] = parseInt(getComputedStyle(dom).top) - removedInstanceHeight - 16 + 'px';
  }
}



export default Message;
