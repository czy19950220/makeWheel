// 为组件提供 install 方法，供组件对外按需引入
import CzyTest from './src/test'
CzyTest.install = Vue => {
  Vue.component(CzyTest.name, CzyTest)
}
export default CzyTest
