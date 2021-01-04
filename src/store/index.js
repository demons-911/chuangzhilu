import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  getters:{
    getActive(state){
      return state.active
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})