import Vue from 'vue'
import App from './App.vue'
import store from './store'
import game from './game'

Vue.config.productionTip = false

game.init(store)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
