<template>
  <div id="app" :class="{'isLoading': $store.getters.getLoaders.length > 0}">
    <Header/>
    <transition name="fade">
      <preloader v-if="$store.getters.getLoaders.length > 0"/>
    </transition>
    <router-view/>
    <div id="notifications" class="notifications-container">
      <div v-for="(msg, index) in $store.state.App.errors" :key="index" class="notification error">
        {{ msg }}
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Preloader from './components/Preloader/index'

export default {
  name: 'App',
  components: {Preloader, Footer, Header}
}
</script>

<style lang="scss">
@import "styles/base.scss";
</style>
