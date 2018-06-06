// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
import header from './components/header'
import footer from './components/footer'
Vue.component('v-header',header)
Vue.component('v-footer',footer)
new Vue({
  el: '#app',
  router,
  components: { App },
  data:{
    a:2
  },
  template: '<App/>',
  created:function(){
  },
  mounted:function(){
  }
})
