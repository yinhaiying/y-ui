import Vue from 'vue'
import App from './App.vue'
import yUi from './packages/index'
Vue.use(yUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
