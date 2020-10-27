import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vuelidate from 'vuelidate'
import AlertMessage from './plugins/Notifications'
import { keycloak } from './services/keycloak'
import { ROUTES } from './constants/routes'

Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    const clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', clickOutsideEvent)
  }
})

Vue.use(Vuelidate)

router.beforeEach((to, from, next) => {
  const {state} = store

  store.commit('setLastPage', to.path)
  if (state.LastPage && state.LastPage !== ROUTES.ROOT && router.history.current === ROUTES.ROOT) {
    router.push(state.LastPage)
  } else {
    next()
  }
})

export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,
  render: h => h(App, {props: {keycloak: keycloak}})
})

Vue.use(AlertMessage)
