<template>
  <div class="alerts-page-container container">
    <h2>
      Alerts
    </h2>
    <button class="button" @click="testNotification('info')">Info</button>
    <button class="button" @click="testNotification('warning')">Warning</button>
    <button class="button" @click="testNotification('error')">Error</button>
    <button class="button" @click="testNotification('success')">Success</button>
  </div>
</template>

<script>
export default {
  name: 'AlertsPage',
  methods: {
    testNotification: function (type) {
      let msg = ''
      switch (type) {
        case 'info':
          msg = 'info info info'
          break
        case 'error':
          msg = 'error error error'
          break
        case 'warning':
          msg = 'warning warning warning'
          break
        case 'success':
          msg = 'success success success'
          break
      }
      this.$notification(type, msg)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
