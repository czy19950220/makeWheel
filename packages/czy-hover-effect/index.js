// 导入组件，组件必须声明 name
import HoverEffect from './src/czy-hover-effect'

HoverEffect.install  = function (Vue) {
  Vue.component(HoverEffect.name, HoverEffect)
}

export default HoverEffect
