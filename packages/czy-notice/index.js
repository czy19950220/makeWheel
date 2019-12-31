// 导入组件，组件必须声明 name
import Notice from './src/czy-notice.vue'

Notice.install  = function (Vue) {
  Vue.component(Notice.name, Notice)
}

export default Notice
