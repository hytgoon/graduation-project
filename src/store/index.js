import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  getters: {
  },
  mutations: {
    changeLogin (state, token) {
      state.Authorization = token
      localStorage.setItem('Authorization', token)
    }
  },
  actions: {
  },
  modules: {
  }
})
