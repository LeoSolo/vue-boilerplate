<template>
  <form class="form" v-on:submit.prevent>
    <div class="inputs-container" v-for="(field, index) in fields" :key="index" v-if="!!form">
      <CInput
        :value.sync="form[field]"
        v-if="!catalogs.hasOwnProperty(field)"
        :placeholder="translate[field] || field"
        :on-input="onInputVal(field)"
      />

      <CDropdown
        v-else
        :list="Object.values($store.state.Catalogs[catalogs[field]])"
        :value.sync="form[field]"
        :multiselect="multiList.includes(field)"
        :placeholder="translate[field] || field"
        :on-input="onInputVal(field)"
      />
    </div>

    <slot name="content"/>

    <button class="button" @click="onSubmit">
      {{ translate.SEND }}
    </button>
  </form>
</template>

<script>
import CInput from '../CInput/index'
import CDropdown from '../Dropdown/index'
import { localization } from '../../constants/localization'
import store from '../../store/store'
import { catalogsVariables, multiselectList } from '../../constants/catalogsVariables'

export default {
  name: 'CForm',
  components: {CInput, CDropdown},
  props: {
    fields: Array,
    onSubmit: Function,
    formName: String
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
    this.initForm()
  },
  methods: {
    initForm: function () {
      if (store.state.Forms[this.formName]) {
        this.fields.map(field => {
          this.form = {
            ...this.form,
            [field]: store.state.Forms[field]
          }
        })
        this.form = store.state.Forms[this.formName]
      } else {
        store.commit('setForm', this.formName)
      }
      this.init = true
    },
    onInputVal: function (field) {
      if (this.form && this.init) {
        store.commit('setFormValue', {
          formName: this.formName,
          key: field,
          value: this.form[field] || null
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
