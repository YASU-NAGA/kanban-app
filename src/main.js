// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto' // プロミスを�Eリフィルする
import App from './App'
import router from './router'
import store from './store' // Vuexのストアインスタンスをインポ�EチE
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // インポ�EトしたストアインスタンスめEstore'オプションとして持E��E  components: { App },
  template: '<App/>'
})
