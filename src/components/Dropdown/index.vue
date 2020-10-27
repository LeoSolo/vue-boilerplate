<template>
  <label class="dropdown-container" :class="{'withoutLabel': !label}"
         v-click-outside="dropdownClose">
    {{ label || '' }}
    <input
      type="text"
      :placeholder="placeholder || 'Выберите значение'"
      class="dropdown-input input"
      :class="{'multiselect': multiselect}"
      @click.self="dropdownTrigger"
      @input="onInput || null"
      :value="value"
      readonly
      ref="input"
    />
    <span class="counter" v-if="multiselect && value && value.length">{{ value.length }}</span>
    <i class="icon arrowDownIcon"/>

    <ul
      class="values-list"
      :class="{ 'visible': isListVisible, 'withoutLabel': !label }"
      v-if="!!list && !!list.length"
      ref="list"
    >
      <li
        class="value"
        :class="{ 'chosenValue': !multiselect ? value === item : selected.includes(item)}"
        @click.prevent="chooseValue(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </label>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    list: {
      type: Array,
      required: true
    },
    label: String,
    value: [Array, String],
    placeholder: String,
    multiselect: Boolean,
    onInput: Function
  },
  data () {
    return {
      isListVisible: false,
      selected: []
    }
  },
  methods: {
    dropdownTrigger: function () {
      this.$refs.list.scrollTo(0, 0)
      this.isListVisible = !this.isListVisible
      if (!this.isListVisible) this.$refs.input.blur()
      this.selected = this.value
        ? [...this.value]
        : []
    },
    dropdownClose: function () {
      this.isListVisible = false
    },
    chooseValue: function (value) {
      if (this.multiselect) {
        this.$refs.input.focus()
        this.selected.indexOf(value) === -1
          ? this.selected.push(value)
          : this.selected.splice(this.selected.indexOf(value), 1)
        this.$emit('update:value', this.selected)
      } else {
        this.$emit('update:value', value)
        setTimeout(() => {
          this.dropdownClose()
          this.$refs.input.blur()
        }, 50)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
