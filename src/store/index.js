import Vue from 'vue'
import Vuex from 'vuex'
import { AuthStore } from './AuthStore'
import { GradebooksStore } from './GradebooksStore'
import { ProfessorsStore } from './ProfessorsStore'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthStore,
    GradebooksStore,
    ProfessorsStore
  }
})

export default store
