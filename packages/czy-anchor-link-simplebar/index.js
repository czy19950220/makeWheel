// 导入组件，组件必须声明 name
import AnchorLink from './src/czy-anchor-link-simplebar.vue'

AnchorLink.install = function (Vue) {
    Vue.component(AnchorLink.name, AnchorLink)
}

export default AnchorLink