import Vue from 'vue/dist/vue.js'
import Home from './Components/Home.vue'

const app = new Vue({
  el: '#app',
  components: { Home },
  template: '<Home />'
})

export default app
