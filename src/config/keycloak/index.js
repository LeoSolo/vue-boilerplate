// import {EnvironmentType, getCurrentEnvironment} from '../../diagnostics/EnvironmentType'

// const REDIRECT_URI = {
//   DEV: 'http://localhost:8082',
//   PROD: 'http://172.22.104.246:8081'
// }

export const initKeycloakOptions = {
  url: 'http://172.22.104.246:8080/auth',
  realm: 'RRD',
  clientId: 'boilerplate',
  // redirectUri: getCurrentEnvironment() === EnvironmentType.PROD
  //   ? REDIRECT_URI.PROD
  //   : REDIRECT_URI.DEV,
  onLoad: 'login-required',
  kc_locale: 'ru'
}

export const updateTokenInterval = 60000
export const updateTokenMinValidity = 70
