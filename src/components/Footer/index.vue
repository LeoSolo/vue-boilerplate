<template>
  <footer class="footer">
    <h3>
      <router-link :to="routes.ROOT" class="link">
        РРД boilerplate
      </router-link>
    </h3>
    <p v-if="!!gitInfo">v. {{ gitInfo }}</p>
  </footer>
</template>

<script>
import { ROUTES } from '../../constants/routes'

export default {
  name: 'Footer',
  data () {
    return {
      routes: ROUTES,
      gitInfo: process.env.GIT_INFO
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
