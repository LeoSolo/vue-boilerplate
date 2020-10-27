<template>
  <div class="modals-page-container container">
    <h2>
      Modals
    </h2>

    <Modal
      :is-visible.sync="isVisibleSimpleModal"
      text="Test text for simple modal usage"
      title="Test Title"
      :on-confirm="confirmSimpleModal"
      :on-cancel="cancel"
      confirm-text="Сохранить"
      cancel-text="Назад"
      :shadowClose="true"
    />

    <Modal :is-visible.sync="isVisibleCustomModal">
      <div slot="content">
        <p>Test text for custom modal usage</p>
        <button class="button" @click="customModalTrigger">Ок</button>
      </div>
    </Modal>

    <button class="button" @click="simpleModalTrigger">Simple Modal</button>
    <button class="button" @click="customModalTrigger">Custom Modal</button>
  </div>
</template>

<script>
import Modal from '../../components/Modal/index'

export default {
  name: 'ModalsPage',
  components: {Modal},
  data: function () {
    return {
      isVisibleSimpleModal: false,
      isVisibleCustomModal: false
    }
  },
  methods: {
    simpleModalTrigger: function () {
      this.isVisibleSimpleModal = !this.isVisibleSimpleModal
    },
    customModalTrigger: function () {
      this.isVisibleCustomModal = !this.isVisibleCustomModal
    },
    confirmSimpleModal: function () {
      this.isVisibleSimpleModal = false
      this.$notification('success', 'Simple Modal have been confirmed and closed')
    },
    cancel: function () {
      this.isVisibleSimpleModal = false
      this.$notification('info', 'Simple Modal have been closed')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
