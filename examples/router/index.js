import Vue from 'vue'
import VueRouter from 'vue-router'
import czyInstallation from '../components/czyInstallation.vue'
import czyIcon from '../components/czyIcon.vue'

Vue.use(VueRouter)

const component = [
  {
    path: '/component/installation',
    name: 'czyInstallation',

    component: czyInstallation,
    meta: {
      keepAlive: true,
      title: 'CZY-UI | 安装'
    }
  },
  {
    path: '/component/icon',
    name: 'czyIcon',
    component: czyIcon,
    meta: {
      keepAlive: true,
      title: 'CZY-UI | 图标'
    }
  },
  {
    path: '/component/button',
    name: 'czyButtonDemo',
    component: () => import('../components/czyButtonDemo.vue'),
    meta: {
      keepAlive: true,
      title: 'CZY-UI | Button'
    }
  },

]

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    redirect: '/component/installation',
    children: [
      //组件
      ...component,
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
