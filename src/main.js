import Vue from 'vue'
import App from './mini-editor/index'
import './mini-editor/plugins/ant-design-vue.js'
import './mini-editor/plugins/font.js'
import './mini-editor/support/index'
import './mini-editor/styles/index.scss'
import vCalendarMobile from 'v-calendar-mobile'
Vue.config.productionTip = false

Vue.use(vCalendarMobile)
new Vue({
  render: h => h(App) }).$mount('#app')
