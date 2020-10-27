<template>
  <div class="shadow"
       :class="{'visible': isVisible}" @click.self="shadowHideModal">
    <div class="modal-container">
      <div class="title" v-if="title">
        {{ title }}
      </div>
      <i class="icon closeBtn" @click="hideModal"/>

      <div class="text" v-if="text">
        <p>
          {{ text }}
        </p>
      </div>

      <slot name="content"/>

      <div class="buttons-container" v-if="!!onConfirm || !!onCancel"
           :class="{'one-button': !onConfirm || !onCancel}">
        <button class="button" @click="onConfirm" v-if="onConfirm">
          {{ confirmText ? confirmText : 'Подтвердить' }}
        </button>
        <button class="button" @click="hideModal" v-if="onCancel">
          {{ cancelText ? cancelText : 'Отменить' }}
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    title: String,
    text: String,
    onConfirm: Function,
    confirmText: String,
    cancelText: String,
    onCancel: Function,
    shadowClose: Boolean
  },
  methods: {
    hideModal: function () {
      this.onCancel ? this.onCancel()
        : this.$emit('update:isVisible', false)
    },
    shadowHideModal: function () {
      if (this.shadowClose) {
        this.onCancel ? this.onCancel()
          : this.$emit('update:isVisible', false)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "style";
</style>
