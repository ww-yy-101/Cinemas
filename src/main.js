import Vue from 'vue' // es6导入方式
import App from './App.vue' // 导入根组件app
// import navbar from './components/Navbar.vue' // 1.引入组件
import router from './router'
import store from './store'
import Vant from 'vant'
import moment from 'moment'
import 'amfe-flexible'
Vue.prototype.$moment = moment
Vue.config.productionTip = false
Vue.use(Vant) // vue.components全局注册
// Vue.component('navbar', Navbar) // 1.1全局注册组件
new Vue({
  router, // this.$router == router
  store, // this.$store == store
  render: h => h(App) // VUE支持的新写法
}).$mount('#app')
