<template>
  <header class="header">
    <h3>
      <router-link :to="routes.ROOT" class="link">
        РРД boilerplate
      </router-link>
    </h3>
    <MainMenu/>
    <div class="username">
      {{
        $store.state.App.keycloak
          ? $store.state.App.keycloak.idTokenParsed.preferred_username
          : ''
      }}
    </div>
    <div class="user-notifications-bell"
         :class="{
          'withMsg': $store.state.UserNotifications.length > 0
           && $store.state.UserNotifications.filter(item => item.active).length > 0
         }"
         @click="notifsTrigger"
    >
      <i class="icon bellIcon"/>
      <div class="counter">{{ $store.state.UserNotifications.length }}</div>
    </div>
    <button class="button" @click="quitModalTrigger">Выход</button>

    <Modal
      :is-visible.sync="isNotifsVisible"
      :shadow-close="true"
      cancel-text="Ок"
      title="Ваши уведомления"
      :on-cancel="notifsTrigger"
    >
      <div slot="content">
        <ul class="user-notifications-list">
          <li v-for="(item, index) in $store.state.UserNotifications"
              :key="index" :class="{'active': item.active}">
            {{ item.msg }}
            <i class="icon"/>
          </li>
        </ul>
      </div>
    </Modal>

    <Modal
      :is-visible.sync="isVisibleQuitModal"
      text="Вы, действительно, хотите выйти?"
      title="Выход"
      :on-confirm="logout"
      :shadowClose="true"
    />
  </header>
</template>

<script>
import MainMenu from './MainMenu/index'
import { ROUTES } from '../../constants/routes'
import { logoutUrl } from '../../services/keycloak'
import store from '../../store/store'
import Modal from '../Modal/index'

export default {
  name: 'Header',
  components: {Modal, MainMenu},
  data () {
    return {
      routes: ROUTES,
      menuItems: [],
      isNotifsVisible: false,
      isVisibleQuitModal: false
    }
  },
  mounted () {
    store.commit('setUserNotification', 'Тестовая нотификация. Какой-то текст о том что необходимо узнать или сделать пользователю.')
    store.commit('setUserNotification', 'Другая тестовая нотификация. Какой-то текст о том что необходимо узнать или сделать пользователю.')
  },
  methods: {
    quitModalTrigger: function () {
      this.isVisibleQuitModal = !this.isVisibleQuitModal
    },
    logout: function () {
      window.location.href = logoutUrl
    },
    notifsTrigger: function () {
      this.isNotifsVisible = !this.isNotifsVisible
      if (!this.isNotifsVisible) {
        store.commit('readAllUserNotifications', false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
