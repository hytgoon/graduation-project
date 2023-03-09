import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: 'home',
    component: () => import('../views/layout'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/homeMap'),
        meta: { title: '首页' },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/homeMap'),
        meta: { title: '用户信息' },
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('../views/homeMap'),
        meta: { title: '角色信息' },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
      next();
  } else {
      // let token = localStorage.getItem('Authorization');
      // if (token === null || token === '') {
      //     next('/login');
      // } else {
      //     next();
      // }
      next()
  }
});
export default router
