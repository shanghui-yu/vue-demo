export default {
  state: {
    mes: '测试 vuex moduleB'
  },
  mutations: {
    SetMesA(state, b) {
      state.mes = b
    }
  },
  actions: {
    SetMesA(state, obj) {
      return new Promise((resolve, rej) => {
        setTimeout(() => {
           state.commit('SetMesA', obj)
          resolve()
        }, 1000);
      })
    }
  }
}
