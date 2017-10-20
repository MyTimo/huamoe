// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import footers from './components/footer'
import huashiHeader from './components/huashiHeader'
import next from './components/next'




Vue.component(footers.name,footers)
Vue.component(huashiHeader.name,huashiHeader)
Vue.component(next.name,next)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router :router,
  template: '<App/>',
  components: { App }
})
