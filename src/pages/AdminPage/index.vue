<template>
  <div class="container">
    <h2>Admin Page</h2>
  </div>
</template>

<script>
import store from '../../store/store'
import { ROUTES } from '../../constants/routes'

export default {
  name: 'AdminPage',
  mounted () {
    if (!store.state.App.keycloak || !store.state.App.keycloak.realmAccess.roles.includes('admin')) {
      this.$router.push(ROUTES.ROOT)
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
