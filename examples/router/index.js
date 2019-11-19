import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const component = [
  {
    path: '/component/installation',
    name: 'czyInstallation',
    component: () => import('../components/czyInstallation.vue'),
    meta: {
      title: 'CZY-UI | 安装'
    }
  },
  {
    path: '/component/icon',
    name: 'czyIcon',
    component: () => import('../components/czyIcon.vue'),
    meta: {
      title: 'CZY-UI | 图标'
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
