<template>
  <div class="tabs-container">

    <ul class="controls-container">
      <li
        v-for="(title, index) in titles"
        :key="index"
        class="title"
        :class="{'active': index === activeTab}"
        @click="setActiveTab(index)"
      >
        {{ title }}
      </li>
    </ul>

    <div class="tabs">
      <div class="tab" v-for="(title, index) in titles"
           :class="{'active': index === activeTab}"
           v-show="index === activeTab" :key="index">
        <slot :name="'tab-' + index"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    titles: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    setActiveTab: function (index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
