// 导入组件，组件必须声明 name
import Statistic from './src/czy-statistic.vue'

Statistic.install = function (Vue) {
    Vue.component(Statistic.name, Statistic)
}

export default Statistic