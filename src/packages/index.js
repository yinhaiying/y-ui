
import Button from './Button/Button.vue'
import Icon from './Icon/Icon.vue'
import ButtonGroup from './Button/ButtonGroup.vue'
import Message from './Message/index.js'
import Tabs from './Tabs/tabs.vue'
import TabsPane from './Tabs/tabs-pane.vue'
import TabsContent from './Tabs/tabs-content.vue'
import TabsNav from './Tabs/tabs-nav.vue'
import TabsItem from './Tabs/tabs-item.vue'
import Pagination from './pagination/pagination.vue'
import Popover from './Popover/popover.vue'
import Collapse from './Collapse/collapse.vue'
import CollapseItem from './Collapse/collapse-item.vue'
import Slides from './Slides/slides.vue'
import SlidesItem from './Slides/slides-item.vue'
import Carousel from './Carousel/carousel.vue'
import CarouselItem from './Carousel/carousel-item.vue'
import Vue from 'vue'
const components  = [
  Button,
  Icon,
  ButtonGroup,
  Tabs,
  TabsContent,
  TabsPane,
  TabsNav,
  TabsItem,
  Pagination,
  Popover,
  Collapse,
  CollapseItem,
  Slides,
  SlidesItem,
  Carousel,
  CarouselItem
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
