import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import Button from '../../src/packages/Button/Button.vue'
import ButtonGroup from '../../src/packages/Button/ButtonGroup.vue'
import Icon from '../../src/packages/Icon/Icon.vue'
Vue.component(Button.name,Button)
Vue.component(ButtonGroup.name,ButtonGroup)
Vue.component(Icon.name,Icon)
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue
}) => {
  Vue.use(Element);
}
