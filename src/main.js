import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import BaiduMap from 'vue-baidu-map'


import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import '@/assets/styles/index.scss' // global css

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(BaiduMap, {ak: 'oMYds9LLtM9Q3Q7YGNQk6AdUfevU0zPC'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

