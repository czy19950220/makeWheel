import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//导入组件库
import CzyUI from './../packages';
import './../public/stylesheets/index.scss'
//注册组件库
Vue.use(CzyUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')