import {EnvironmentType, getCurrentEnvironment} from '../../diagnostics/EnvironmentType'

const API = {
  DEV: 'http://185.17.141.59:8080',
  PROD: 'http://185.17.141.59:8081'
}

export class EndpointNames {
  static RAILS = 'rails'
}

let DEV_ENDPOINTS_MAP = new Map()
DEV_ENDPOINTS_MAP.set(EndpointNames.RAILS, API.DEV + '/fetch')

let PROD_ENDPOINTS_MAP = new Map()
PROD_ENDPOINTS_MAP.set(EndpointNames.RAILS, API.PROD + '/api/elastic/fetch')

export const ENDPOINTS_MAP = getCurrentEnvironment() === EnvironmentType.PROD
  ? PROD_ENDPOINTS_MAP
  : DEV_ENDPOINTS_MAP
