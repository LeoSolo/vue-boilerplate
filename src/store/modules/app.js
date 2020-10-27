const state = {
  loaders: [],
  errors: [],
  isAuth: false,
  keycloak: null
}

const getters = {
  getLoaders: state => state.loaders,
  getErrors: state => state.errors
}

const actions = {}

const mutations = {
  setLoader (state, loader) {
    const {state: {App: {loaders}}} = this

    if (loaders.indexOf(loader) === -1) loaders.push(loader)
  },
  removeLoader (state, loader) {
    const {state: {App: {loaders}}} = this

    setTimeout(() => {
      loaders.splice(loaders.indexOf(loader), 1)
    }, 150)
  },
  setError (state, error) {
    const {state: {App: {errors}}} = this

    errors.push(error)
    setTimeout(() => {
      errors.splice(errors.indexOf(error), 1)
    }, 6000)
  },
  setAuth (state, value) {
    state.isAuth = value
  },
  setKeycloak (state, keycloak) {
    state.keycloak = keycloak
  },
  clearKeycloak (state, value) {
    state.keycloak = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
