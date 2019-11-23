//region:引入样式
import '../public/css/result.css'
import '../public/iconfont/iconfont.css'
import '../public/css/flags.css'
import '../public/css/czy-vue-ui-base.css'
import '../public/css/animation.scss'
import '../public/js/czy-vue-ui-base.js'
//endregion

import CzyTest from './test'
import Input from './czy-input'
import Statistic from './czy-statistic'
import ImgCard from './czy-img-card'
import Collapse from './czy-collapse'
import ElDemoBlock from './czy-el-demo-block'
import TableSimple from './czy-table-simple'
import BackTop from './czy-backtop'
import Button from './czy-button'
import FooterToolbar from './czy-footertoolbar'
import Drawer from './czy-drawer'
import Loading from './czy-loading'
import UploadImg from './czy-upload-img'
import PreviewImg from './czy-preview-img'
import Modal from './czy-modal'
import Anchor from './czy-anchor'
import AnchorLink from './czy-anchor-link'
import Divider from './czy-divider'
import MenuSimple from './czy-menu-simple'
import PulldownRefresh from './czy-pulldown-refresh'
import LoadingPage from './czy-loading-page'
import UrlParam from './czy-url-param'
import ModelMask from './czy-model-mask'
import DateRangePicker from './czy-date-range-picker'
import CountryPicker from './czy-country-picker'
import WidgetModal from './czy-widget-modal'

import VueCropper from './vue-cropper'
import VueDragResize from './vue-drag-resize'


import AnchorLinkSimplebar from './czy-anchor-link-simplebar'

// 所有组件列表
const components = [
  CzyTest,
  Input,
  Statistic,
  ImgCard,
  Collapse,
  ElDemoBlock,
  TableSimple,
  BackTop,
  Button,
  FooterToolbar,
  Drawer,
  Loading,
  UploadImg,
  PreviewImg,
  Modal,
  Anchor,
  AnchorLink,
  Divider,
  MenuSimple,
  PulldownRefresh,
  LoadingPage,
  UrlParam,
  ModelMask,
  DateRangePicker,
  CountryPicker,
  WidgetModal,

  VueDragResize,
  VueCropper,

  AnchorLinkSimplebar
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
}
