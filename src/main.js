// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入vue-router
import router from './router'
//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 改变 SCSS 变量，自定义主题色，待研究
// import './App.scss'
Vue.use(ElementUI,{size:'small'});
// http请求路径
import urls from './http/urls'
Vue.prototype.$urls = urls
// http请求
import http from './http/http'
Vue.prototype.$http = http
// vuex
import vuex from './vuex'

//生产环境警告去除
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})
