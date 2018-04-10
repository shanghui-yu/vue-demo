import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    mes:'测试 vuex'
  },
  mutations: {
    SetMes (state, b) {
      state.mes = b
    }
  },
  actions: {
    SetMes (context, b) {
      context.commit('SetMes', b)
    }
  }
})

export default store
