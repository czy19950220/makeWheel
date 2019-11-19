// 导入组件，组件必须声明 name
import Modal from './src/czy-modal.vue'

Modal.install = function (Vue) {
    Vue.component(Modal.name, Modal)
}

export default Modal