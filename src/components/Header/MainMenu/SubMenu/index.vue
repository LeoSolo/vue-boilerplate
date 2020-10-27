<template>
  <ul class="sub-menu-list" :class="{
    'active': checkIncludes(hoveredLink) || checkEqually($store.state.LastPage)
    }">
    <li class="sub-menu-item" v-for="(item, index) in Object.keys(subRoutes)"
        :key="index" v-if="subRoutes[item].includes(hoveredLink) && hoveredLink !== '/'">
      <router-link :to="subRoutes[item]" class="link" exact
                   :class="{'router-link-active': subRoutes[item] === $store.state.LastPage}">
        {{ translate[item] || item }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { SUB_ROUTES, ROUTES } from '../../../../constants/routes'
import { localization } from '../../../../constants/localization'

export default {
  name: 'SubMenu',
  props: {
    hoveredLink: String
  },
  data () {
    return {
      routes: ROUTES,
      subRoutes: SUB_ROUTES,
      translate: localization
    }
  },
  methods: {
    checkIncludes: (item) => {
      if (item === ROUTES.ROOT) return false
      return Object.values(SUB_ROUTES).filter(link => link.includes(item)).length > 0
    },
    checkEqually: function (item) {
      if (this.hoveredLink === ROUTES.ROOT) return false
      return Object.values(SUB_ROUTES).filter(link => link === this.hoveredLink).length > 0
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
