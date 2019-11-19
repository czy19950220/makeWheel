import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//region:导入样式
import '../public/css/cover.scss';
import '../public/iconfont/iconfont.css';
import '../public/css/animate.min.css'
//endregion

//region:导入组件库
import CzyUI from './../packages';
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
//endregion

//region:注册组件库
Vue.use(CzyUI);
Vue.use(VueHighlightJS)
//endregion

Vue.config.productionTip = false

//region:router路由设置
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined?'CZY-UI':to.meta.title;
  next();
})
//endregion

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
