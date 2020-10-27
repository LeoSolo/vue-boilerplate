<template>
  <fieldset class="fieldset" :class="{ 'accordion': accordion, 'isOpened': isOpened }">
    <legend>
      {{ legend }}
      <i v-if="accordion" class="icon arrowDownIcon" @click="accordionTrigger"/>
    </legend>

    <slot name="content"/>
  </fieldset>
</template>

<script>
export default {
  name: 'CFieldset',
  props: {
    legend: String,
    opened: Boolean,
    accordion: Boolean
  },
  data () {
    return {
      isOpened: false
    }
  },
  created () {
    this.isOpened = this.opened
  },
  methods: {
    accordionTrigger: function () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
