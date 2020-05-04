import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import Button from '../../src/packages/Button/Button.vue'
import ButtonGroup from '../../src/packages/Button/ButtonGroup.vue'
import Icon from '../../src/packages/Icon/Icon.vue'
import Tabs from '../../src/packages/Tabs/tabs.vue'
import TabsNav from '../../src/packages/Tabs/tabs-nav.vue'
import TabsItem from '../../src/packages/Tabs/tabs-item.vue'
import TabsContent from '../../src/packages/Tabs/tabs-content.vue'
import TabsPane from '../../src/packages/Tabs/tabs-pane.vue'
import Pagination from '../../src/packages/pagination/pagination.vue'
import Popover from "../../src/packages/Popover/popover.vue"
import Collpase from "../../src/packages/Collapse/collapse.vue"
import CollpaseItem from "../../src/packages/Collapse/collapse-item.vue"
Vue.component(Button.name,Button)
Vue.component(ButtonGroup.name,ButtonGroup)
Vue.component(Icon.name,Icon);
Vue.component(Tabs.name,Tabs);
Vue.component(TabsNav.name,TabsNav);
Vue.component(TabsItem.name,TabsItem);
Vue.component(TabsContent.name,TabsContent);
Vue.component(TabsPane.name,TabsPane);
Vue.component(Pagination.name,Pagination);
Vue.component(Popover.name,Popover);
Vue.component(Collpase.name,Collpase);
Vue.component(CollpaseItem.name,CollpaseItem);


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
