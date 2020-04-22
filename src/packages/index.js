
import Button from './Button/Button.vue'
import Icon from './Icon/Icon.vue'
import ButtonGroup from './Button/ButtonGroup.vue'
import Message from './Message/index.js'
import Tabs from './Tabs/tabs.vue'
import TabsPane from './Tabs/tabs-pane.vue'
import TabsContent from './Tabs/tabs-content.vue'
import TabsNav from './Tabs/tabs-nav.vue'
import TabsItem from './Tabs/tabs-item.vue'
import Vue from 'vue'
const components  = [
  Button,
  Icon,
  ButtonGroup,
  Tabs,
  TabsContent,
  TabsPane,
  TabsNav,
  TabsItem
];
const install = (Vue) => {
  // 把所有的组件设置程全局组件
  components.forEach((component) => {
    Vue.component(component.name,component);
  });

  Vue.prototype.$message = Message;

}

// vue通过script标签引入，vue挂载在window下。
if(typeof window.vue !== 'undefined'){
  install(window.vue);
}
export default {
  install
}
