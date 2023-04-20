//Import Statements
import Vue from 'vue'
import App from './MovieDBHome.vue'

Vue.config.productionTip = false

//Create new Vue instance from App, using the MovieDBHome vue template
new Vue({
  render: h => h(App),
}).$mount('#app')
