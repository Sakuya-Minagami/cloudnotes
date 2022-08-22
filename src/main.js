import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Blob from './Blob.js'
import Export2Excel from './Export2Excel.js'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
