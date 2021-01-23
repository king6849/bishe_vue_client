import Vue from 'vue'
import App from './App.vue'

import router from "@/router/router";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
