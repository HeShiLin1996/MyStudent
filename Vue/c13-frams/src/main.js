// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'

import {
  Button,
  Carousel,
  CarouselItem
} from 'element-ui'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

Vue.use(iView);
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "./src/assets/error.png",
  loading: './src/assets/loading.jpg',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})  

Vue.config.productionTip = false
Vue.component('show',{
  template:'<h1>shou time</h1>'
})
Vue.component('chart', ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
