<template>
  <div class="table-container">
    <h4 v-if="!list || list.length === 0">Данных нет</h4>

    <div class="table" v-if="!!list && list.length > 0">
      <div class="column" v-for="(item, index) in Object.keys(list[0])" :key="index">
        <div class="title cell">
          {{ translate[item] || item }}
        </div>

        <div :class="{'value cell': true, 'hovered': hoveredIndex === i}"
             @mouseover="hoverStroke(i)"
             v-for="(val, i) in list"
             :key="i"
        >
          {{
            item && item.toLowerCase().indexOf('date') !== -1 ?
              dateParse(val[item]) || '-'
              : val[item] || '-'
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateParser from '../../utils/dateParse'
import Preloader from '../Preloader/index'
import { localization } from '../../constants/localization'

export default {
  name: 'CustomTable',
  components: {Preloader},
  props: {
    list: Array
  },
  data () {
    return {
      hoveredIndex: null,
      translate: localization
    }
  },
  methods: {
    dateParse: (date) => {
      return dateParser(date)
    },
    hoverStroke: function (index) {
      this.hoveredIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
