<template functional>
  <label class="textarea-container">
    {{ label || '' }}
    <textarea
      placeholder="Введите значение"
      class="textarea input"
      @input="onChange"
      :value="value"
      @keyup.enter="onEnter || null"
    />
  </label>
</template>

<script>
export default {
  name: 'CTextarea',
  props: {
    value: String,
    label: String,
    onEnter: Function
  },
  methods: {
    onChange: function (event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
