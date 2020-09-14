import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import store from "./store/index.js";
import VueRouter from 'vue-router';
import "./iconfont/font_1591377_l1hujlhnrl/iconfont.css"
Vue.use(VueRouter)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Pagination, Autoplay} from "swiper";
Swiper.use([Navigation, Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper)

import axios from "./net/axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
