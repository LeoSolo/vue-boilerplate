import Vue from 'vue'

export default {
  install (vue, options) {
    Vue.prototype.$notification = (type, message) => {
      let elem = document.createElement('div')
      elem.className = 'notification ' + type
      elem.innerHTML = message
      document.getElementById('notifications').appendChild(elem)

      setTimeout(() => {
        elem.parentNode.removeChild(elem)
      }, 6000)
    }
  }
}
