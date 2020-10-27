<template>
  <div class="scroll-top-button"
       @click="scrollToTop" ref="scrollTopBtn"
       v-show="scrollTop > displayBorder">
    <i class="icon arrowIcon"/>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data () {
    return {
      parent: null,
      scrollTop: 0,
      displayBorder: 120
    }
  },
  mounted () {
    this.parent = this.$refs.scrollTopBtn.parentNode
    this.parent.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollToTop: function () {
      this.parent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    scrollHandler: function () {
      this.scrollTop = this.parent.scrollTop
    }
  },
  beforeDestroy () {
    this.parent.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
