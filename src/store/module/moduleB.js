export default {
  state: {
    mess: '测试 vuex moduleB'
  },
  mutations: {
    SetMesB(state, b) {
      state.mess = b
    }
  },
  actions: {}
}