<template>
  <div class="menu-container" @mouseleave="unHover">
    <ul class="list-menu">
      <li v-for="(item, index) in Object.keys(routes)"
          :key="index" class="menu-item" @mouseover="hoverItem(routes[item])">
        <router-link :to="routes[item]" class="link" exact :ref="'menu-item-' + index"
                     :class="{'router-link-active': routes[item] === $store.state.LastPage}">
          {{ translate[item] || item }}

          <i v-if="Object.values(subRoutes).filter(sub_item => sub_item.includes(routes[item])).length > 0
          && routes[item] !== routes.ROOT"
             :class="{'active': hoveredLink === routes[item]}"
             class="icon arrowIcon"/>
        </router-link>
      </li>

      <li class="menu-item"
          @mouseover="hoverItem(hiddenRoutes.INFO_PAGE)"
          v-if="$store.state.App.keycloak && $store.state.App.keycloak.realmAccess.roles.includes('user_plus')">
        <router-link :to="hiddenRoutes.INFO_PAGE" class="link" exact>
          {{ translate.INFO_PAGE }}
        </router-link>
      </li>

      <li class="menu-item"
          @mouseover="hoverItem(hiddenRoutes.ADMIN_PAGE)"
          v-if="$store.state.App.keycloak && $store.state.App.keycloak.realmAccess.roles.includes('admin')">
        <router-link :to="hiddenRoutes.ADMIN_PAGE" class="link" exact>
          {{ translate.ADMIN_PAGE }}
        </router-link>
      </li>
    </ul>

    <sub-menu :hovered-link="hoveredLink"/>
  </div>
</template>

<script>
import { ROUTES, HIDDEN_ROUTES, SUB_ROUTES } from '../../../constants/routes'
import { localization } from '../../../constants/localization'
import SubMenu from './SubMenu/index'
import store from '@/store/store'

export default {
  name: 'Main-menu',
  components: {SubMenu},
  data () {
    return {
      routes: ROUTES,
      subRoutes: SUB_ROUTES,
      hiddenRoutes: HIDDEN_ROUTES,
      translate: localization,
      hoveredLink: null
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    Object.values(SUB_ROUTES).find(subItem => subItem === store.state.LastPage)
      ? this.hoveredLink = '/' + store.state.LastPage.split('/')[1] : null
  },
  methods: {
    hoverItem: function (item) {
      this.hoveredLink = item
    },
    unHover: function () {
      if (Object.values(SUB_ROUTES).includes(store.state.LastPage)) {
        this.hoveredLink = '/' + store.state.LastPage.split('/')[1]
      } else {
        this.hoveredLink = null
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
