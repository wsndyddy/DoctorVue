// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/zh-CN'
import './index.less'
import './style.less'
Vue.config.productionTip = false

Vue.use(iView, {
  locale,
  transfer: true,
  size: 'large',
  i18n: (key, value) => i18n.t(key, value)
})

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
