import Vue from 'vue'
import './plugins/bootstrapVue'
import './plugins/fontAwesome'
import './directives/Index'

import App from './App.vue'
import router from './router'
import store from './store'

// Traer el css global
import './assets/css/main.styl'

Vue.config.productionTip = false

// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
