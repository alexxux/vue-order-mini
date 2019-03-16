import Vue from 'vue'
import App from './App'
import '@/common/style/index.scss'
import '@/common/iconfont/iconfont.css'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
