import Vue from 'vue'
import Vuex from 'vuex'
import Filters from './modules/filters'
import App from './modules/app'
import Forms from './modules/forms'
import UserNotifications from './modules/userNotifications'
import createPersistedState from 'vuex-persistedstate'
import { wayRail, testList, testList2 } from '../mocks/catalogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    App: {},
    Filters: {},
    Forms: {},
    LastPage: null,
    Catalogs: {
      wayRail: wayRail,
      testList: testList,
      testList2: testList2
    }
  },
  plugins: [
    createPersistedState({
      paths: ['Filters', 'Forms', 'LastPage'],
      storage: window.localStorage
    })
  ],
  mutations: {
    clearFilters (state) {
      state.Filters = {}
    },
    setLastPage (state, page) {
      state.LastPage = page
    }
  },
  modules: {
    Filters,
    App,
    Forms,
    UserNotifications
  }
})
