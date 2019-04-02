
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./module/moduleA";
import moduleB from "./module/moduleB";
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB
  }
})

export default store
