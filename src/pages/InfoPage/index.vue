<template>
  <div class="container">
    <h2>Info Page</h2>
    <c-fieldset legend="Данные о пользователе">
      <ul slot="content" class="user-info-list" v-if="$store.state.App.keycloak">
        <li>
          clientId: {{ $store.state.App.keycloak.clientId }}
        </li>
        <li>
          email: {{ $store.state.App.keycloak.idTokenParsed.email }}
        </li>
        <li>
          Имя: {{ $store.state.App.keycloak.idTokenParsed.given_name }}
        </li>
        <li>
          Фамилия: {{ $store.state.App.keycloak.idTokenParsed.family_name }}
        </li>
        <li>
          Должность: {{ $store.state.App.keycloak.idTokenParsed.job_position }}
        </li>
        <li>
          Подразделение: {{ $store.state.App.keycloak.idTokenParsed.subdivision }}
        </li>
        <li>
          Язык: {{ $store.state.App.keycloak.idTokenParsed.locale }}
        </li>
        <li>
          Номер телефона: {{ $store.state.App.keycloak.idTokenParsed.phone_number }}
        </li>
        <li>
          Логин: {{ $store.state.App.keycloak.idTokenParsed.preferred_username }}
        </li>
        <li>
          Права: {{ $store.state.App.keycloak.realmAccess.roles }}
        </li>
      </ul>
    </c-fieldset>
  </div>
</template>

<script>
import store from '../../store/store'
import { ROUTES } from '../../constants/routes'
import CFieldset from '../../components/CFieldset/index'

export default {
  name: 'InfoPage',
  components: {CFieldset},
  mounted () {
    if (!store.state.App.keycloak || !store.state.App.keycloak.realmAccess.roles.includes('user_plus')) {
      this.$router.push(ROUTES.ROOT)
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
