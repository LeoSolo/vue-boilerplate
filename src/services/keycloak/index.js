import Keycloak from 'keycloak-js'
import {
  initKeycloakOptions,
  updateTokenInterval,
  updateTokenMinValidity
} from '../../config/keycloak'
import store from '../../store/store'

let keycloak = Keycloak(initKeycloakOptions)
let logoutUrl = ''

store.commit('setLoader', 'authLoader')

keycloak.init(initKeycloakOptions)
  .then((auth) => {
    store.commit('removeLoader', 'appLoader')
    store.commit('setAuth', auth)

    logoutUrl = keycloak.createLogoutUrl()

    // Token Refresh
    setInterval(() => {
      keycloak.updateToken(updateTokenMinValidity)
    }, updateTokenInterval)

    store.commit('setKeycloak', keycloak)
  })

export {
  keycloak,
  logoutUrl
}
