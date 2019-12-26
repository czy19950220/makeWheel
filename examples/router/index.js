import Vue from 'vue'
import VueRouter from 'vue-router'
import czyInstallation from '../components/czyInstallation.vue'

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
    component: () => import('../components/czyIcon.vue'),
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
  {
    path: '/component/shadow',
    name: 'czyShadowDemo',
    component: () => import('../components/czyShadowDemo.vue'),
    meta: {
      keepAlive: true,
      title: 'CZY-UI | Shadow'
    }
  },
  {
    path: '/component/hover-effect',
    name: 'czyHoverEffectDemo',
    component: () => import('../components/czyHoverEffectDemo.vue'),
    meta: {
      keepAlive: true,
      title: 'CZY-UI | HoverEffect'
    }
  },
  {
    path: '/component/input',
    name: 'czyInputDemo',
    component: () => import('../components/czyInputDemo.vue'),
    meta: {
      keepAlive: true,
      title: 'CZY-UI | 输入框'
    }
  },

]
const elseComponent = [
  {
    path: '/component/scroll-bar',
    name: 'vueSimplebar',
    component: () => import('../components/vueSimplebar.vue'),
    meta: {
      keepAlive: true,
      title: 'CZY-UI | 滚动条'
    }
  },
];

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    redirect: '/component/installation',
    children: [
      //组件
      ...component,
      ...elseComponent,
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
