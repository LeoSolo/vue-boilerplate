const state = {}

const getters = {
  getForm: state => form => state.Forms[form]
}

const actions = {}

const mutations = {
  setForm (state, form) {
    state[form] = {}
  },
  setFormValue (state, item) {
    const {formName, key, value} = item

    state[formName][key] = value
  },
  setFormValues (state, form) {
    state[form] = form
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
