import axios from 'axios'
import { merge } from 'lodash'
import * as ApiConf from '../../config/api'
import store from '../../store/store'
import { localization } from '../../constants/localization'

export const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
}

export class Api {
  static async getRailsList (params) {
    let endpoint = ApiConf.ENDPOINTS_MAP.get(ApiConf.EndpointNames.RAILS)
    return this.call('getRailsList', `${endpoint}`, Methods.GET, params)
  }

  static async getSomeAuthData (id) {
    let path = `list/some/${id}/request`
    let endpoint = ApiConf.ENDPOINTS_MAP.get(ApiConf.EndpointNames.RAILS)
    return this.authCall(`${endpoint}${path}`, Methods.PUT)
  }

  static async call (loader, url, method, params, data, options = {}) {
    store.commit('setLoader', loader)
    return axios(merge({
      url: url,
      method: method,
      data: data,
      params: params,
      headers: {
        ContentType: 'application/json'
      }
    }, options)).then(result => {
      store.commit('removeLoader', loader)
      return result.data
    }).catch(error => {
      store.commit('removeLoader', loader)
      const {response: {data}} = error
      store.commit('setError', (data && data.text) ? (localization[data.text] || data.text) : error)
    })
  }

  static async authCall (loader, url, method, params, data, options = {}) {
    let token = 'token'
    store.commit('setLoader', loader)
    return axios(merge({
      url: url,
      method: method,
      data: data,
      params: params,
      headers: {
        ContentType: 'application/json',
        Authorization: token
      }
    }, options)).then(result => {
      store.commit('removeLoader', loader)
      return result.data
    }).catch(error => {
      store.commit('removeLoader', loader)
      const {response: {data}} = error
      store.commit('setError', (data && data.text) ? data.text : error)
    })
  }
}
