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
        component: () => import('../views/home/homeMap'),
        meta: { title: '首页' },
      },
      {
        path: 'infect',
        name: 'infect',
        component: () => import('../views/condition/infect'),
        meta: { title: '感染人数分布' },
      },
      {
        path: 'isolation',
        name: 'isolation',
        component: () => import('../views/condition/isolation'),
        meta: { title: '隔离点分布' },
      },
      {
        path: 'control',
        name: 'control',
        component: () => import('../views/condition/control'),
        meta: { title: '管控分布' },
      },
      {
        path: 'acid',
        name: 'acid',
        component: () => import('../views/manage/acid'),
        meta: { title: '核酸点分布' },
      },
      {
        path: 'acidContrl',
        name: 'acidContrl',
        component: () => import('../views/manage/acidContrl'),
        meta: { title: '核酸点管理' },
      },
      {
        path: 'people',
        name: 'people',
        component: () => import('../views/resource/people'),
        meta: { title: '管理防疫人员' },
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('../views/resource/goods'),
        meta: { title: '管理防疫物资' },
      },
      {
        path: 'smart',
        name: 'smart',
        component: () => import('../components/smart'),
        meta: { title: '智能调度' },
      },
      {
        path: 'traffic',
        name: 'traffic',
        component: () => import('../components/traffic'),
        meta: { title: '交通信息管理' },
      },
      {
        path: 'statement',
        name: 'statement',
        component: () => import('../components/statement'),
        meta: { title: '统计报表' },
      },
      {
        path: 'assist',
        name: 'assist',
        component: () => import('../components/assist'),
        meta: { title: '辅助信息' },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../components/user'),
        meta: { title: '用户信息管理' },
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
      let token = localStorage.getItem('Authorization');
      if (token === null || token === '') {
          next('/login');
      } else {
          next();
      }
  }
});
export default router
