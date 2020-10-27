<template>
  <div class="second-page-container container">
    <scroll-top />

    <h2 class="with-popup">
      Custom Table
      <span class="popup">Это тестовый попап. Это тестовый попап. Это тестовый попап.</span>
    </h2>

    <filters :on-search="onSearch" :fields="['RAILBOOKID', 'WAYRAIL', 'TEST', 'TEST2', 'WERTY']"/>

    <custom-table :list="testData"/>

    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
    <p>Text for add scroll</p>
  </div>
</template>

<script>
import CustomTable from '../../components/CustomTable/index'
import { Api } from '../../services/api/api'
import Modal from '../../components/Modal/index'
import CInput from '../../components/CInput/index'
import Dropdown from '../../components/Dropdown/index'
import Filters from '../../components/Filters/index'
import store from '../../store/store'
import ScrollTop from '../../components/ScrollTop/index'

export default {
  name: 'SecondPage',
  components: {ScrollTop, Filters, Dropdown, CInput, Modal, CustomTable},
  data: function () {
    return {
      testData: null,
      wayRailEnum: {}
    }
  },
  mounted () {
    this.getRailsList()
  },
  methods: {
    getRailsList: function () {
      const { state: { Filters } } = store

      let WAYRAIL = []
      if (Filters.WAYRAIL) {
        Filters.WAYRAIL.map(item => {
          WAYRAIL.push(this.getKeyByValue(store.state.Catalogs.wayRail, item))
        })
      }
      let params = {
        RAILBOOKID: Filters.RAILBOOKID || null,
        WAYRAIL: WAYRAIL || null,
        typeofasset: 'rails',
        size: '20'
      }
      Api.getRailsList(params)
        .then(res => this.testData = JSON.parse(res.data).map(item => item._source.doc))
    },
    getKeyByValue: (object, value) => {
      return Object.keys(object).find(key => object[key] === value)
    },
    onSearch: function () {
      this.getRailsList()
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
