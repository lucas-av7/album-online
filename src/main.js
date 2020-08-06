import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() { this.$store.commit('loadLocalStorage');},
  render: h => h(App)
}).$mount('#app')
