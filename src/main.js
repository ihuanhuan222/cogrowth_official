// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import 'url-search-params-polyfill'

import App from './App'
import router from './router'
import axios from 'axios'


//swiper----
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, )


Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://news.kuchengzhang.cn:8089/boot'
axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.params.common['x-access-token'] =='eyJhbGciOiJIUzUxMiJ9.eyJBY2Nlc3NUb2tlbiI6eyJpZCI6IjUiLCJ1c2VybmFtZSI6IjE4NjYwODk4NjU3Iiwicm9sZSI6bnVsbH0sImV4cCI6MTU1NzI4ODE0Mn0.WCxGSYOgVr0fBon3JBs3PnBq5CqakWldtmt8rdWmDbUKTXqWVAhUzg5ytWL_XKo8M2yKNBdaeeZdinvTaMjykg';

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});








