// 为组件提供 install 方法，供组件对外按需引入
import CzyCol from './src/main'
CzyCol.install = Vue => {
  Vue.component(CzyCol.name, CzyCol)
}
export default CzyCol
