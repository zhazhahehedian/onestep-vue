import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置反向代理,前端请求默认发送到 http://localhost:8443/api
var axi = require('axios')
axi.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
