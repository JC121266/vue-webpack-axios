import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// actions,getters
Vue.use(Vuex)

const state = {
  conut: 1,
  loading: false
}

export default new Vuex.Store({
  state,
  // actions,
  mutations,
  getters,
  actions

  // mutations
})
