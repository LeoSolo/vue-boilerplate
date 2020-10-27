const state = []

const getters = {
  getUserNotifications: state => state
}

const actions = {}

const mutations = {
  setUserNotification (state, msg) {
    if (!state.filter(item => item.msg === msg).length > 0) {
      state.push({
        active: true,
        msg: msg
      })
    }
  },
  deleteUserNotification (state, msg) {
    state.splice(state.indexOf(msg), 1)
  },
  readAllUserNotifications (state, status) {
    state.map(item => item.active = status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
