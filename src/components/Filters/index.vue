<template>
  <div class="filters-container">
    <form v-on:submit.prevent>
      <div class="input-container" v-for="(field, index) in fields" :key="index" v-if="!!form">
        <CInput
          :value.sync="form[field]"
          v-if="!catalogs.hasOwnProperty(field)"
          :placeholder="translate[field] || field"
          :on-input="onInputFilter(field)"
        />

        <Dropdown
          v-else
          :list="Object.values($store.state.Catalogs[catalogs[field]])"
          :value.sync="form[field]"
          :multiselect="multiList.includes(field)"
          :placeholder="translate[field] || field"
          :on-input="onInputFilter(field)"
        />
      </div>

      <slot name="content"/>

      <button class="button with-icon" @click="onSearch">
        {{ translate.SEARCH }}
        <i class="icon searchIcon"/>
      </button>
    </form>

    <ul class="filters-list">
      <li
        v-for="(field, index) in fields"
        :key="index"
        v-if="$store.state.Filters[field] && $store.state.Filters[field].length"
        class="filter-mark"
      >
        <strong>{{ translate[field] || field }}:</strong> {{ $store.state.Filters[field] }}
        <i class="icon iconCross" @click="clearField(field)"/>
      </li>

      <li class="clear-button-container" v-if="form && Object.keys(form).filter(item => form[item]).length > 0">
        <button class="button" @click="clearAll">Очистить поиск</button>
      </li>
    </ul>
  </div>
</template>

<script>
import CInput from '../CInput/index'
import Dropdown from '../Dropdown/index'
import { localization } from '../../constants/localization'
import store from '../../store/store'
import { catalogsVariables, multiselectList } from '../../constants/catalogsVariables'

export default {
  name: 'Filters',
  components: {CInput, Dropdown},
  props: {
    onSearch: Function,
    fields: Array
  },
  data () {
    return {
      translate: localization,
      form: {},
      catalogs: catalogsVariables,
      multiList: multiselectList,
      init: false
    }
  },
  mounted () {
    this.initFiltersForm()
  },
  methods: {
    clearField: function (field) {
      store.commit('clearFilter', field)
      this.form[field] = null
      this.onSearch()
    },
    onInputFilter: function (field) {
      if (this.form && this.init) {
        store.commit('setFilter', {
          [field]: this.form[field] ? this.form[field] : null
        })
      }
    },
    clearAll: function () {
      for (let key in this.form) {
        if (this.form.hasOwnProperty(key)) this.form[key] = null
      }

      store.commit('clearFilters', null)

      this.onSearch()
    },
    initFiltersForm: function () {
      this.fields.map(field => {
        this.form = {
          ...this.form,
          [field]: store.state.Filters[field]
        }
      })
      this.init = true
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
