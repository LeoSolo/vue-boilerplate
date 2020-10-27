<template>
  <label class="input-container">
    {{ label || '' }}
    <input
      :type="type || 'text'"
      :placeholder="placeholder || 'Введите значение'"
      class="input"
      @input="onChange"
      :value="value"
      @keyup.enter="onEnter || null"
    />
  </label>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    value: String,
    label: String,
    placeholder: String,
    type: String,
    onEnter: Function,
    onInput: Function
  },
  methods: {
    onChange: function (event) {
      this.$emit('update:value', event.target.value)
      if (this.onInput) this.onInput()
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
