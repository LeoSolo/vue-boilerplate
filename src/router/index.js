import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { HIDDEN_ROUTES, ROUTES, SUB_ROUTES } from '../constants/routes'
import HelloWorld from '@/pages/FirstPage/'
import SecondPage from '@/pages/SecondPage/'
import FormsPage from '@/pages/FormsPage/'
import AdminPage from '@/pages/AdminPage/'
import InfoPage from '@/pages/InfoPage/'
import AlertsPage from '@/pages/AlertsPage/'
import ModalsPage from '@/pages/ModalsPage/'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: ROUTES.ROOT,
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: ROUTES.SECOND_PAGE,
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: ROUTES.FORMS_PAGE,
      name: 'FormsPage',
      component: FormsPage
    },

    {
      path: SUB_ROUTES.ALERTS_PAGE,
      name: 'AlertsPage',
      component: AlertsPage
    },
    {
      path: SUB_ROUTES.MODALS_PAGE,
      name: 'ModalsPage',
      component: ModalsPage
    },

    {
      path: HIDDEN_ROUTES.ADMIN_PAGE,
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: HIDDEN_ROUTES.INFO_PAGE,
      name: 'InfoPage',
      component: InfoPage
    }
  ]
})
