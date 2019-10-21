// 为组件提供 install 方法，供组件对外按需引入
import CzyBackground from './src/main'
CzyBackground.install = Vue => {
  Vue.component(CzyBackground.name, CzyBackground)
}
export default CzyBackground
