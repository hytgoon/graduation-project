import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
