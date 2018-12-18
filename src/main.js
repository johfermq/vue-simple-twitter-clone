import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import moment from 'moment'

// Axios
window.axios = axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL

// Vee-validate
Vue.use(VeeValidate)

// Global filter to format dates with momentjs
Vue.filter('timeAgo', date => moment(date).fromNow())
Vue.filter('joined', date => moment(date).format('MMMM YYYY'))
Vue.filter('dob', date => moment(date).format('MMMM Do YYYY'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
