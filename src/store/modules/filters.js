const state = {}

const getters = {
  getFilters: state => state
}

const actions = {}

const mutations = {
  setFilter (state, filter) {
    state
      ? Object.assign(state, filter)
      : state = filter
  },
  clearFilter (state, key) {
    state[key] = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
