import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'

import './common/reset.css'
// 引入svg字体样式
import './common/stylus/fonts.styl'
// 声明使用插件
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAElBMVEXu7u7////8/Pzz8/P5+fn29vYLYZEUAAACtUlEQVRYw+2UzZazIAyGadG9oN0b1D1qu8fW2U9npvd/K18MIDpHe/y2c3hPi/zkMSFEWFRUVFRUVFTUX1Pnnnx8/DebCGNZBUIfZMZJBMGFJtqyFZ8+iB6lqVdswVch5IelyCEXmtd+8SxwtaS4Mly6C1lxii8YZD7uktr1XqTtnAyGVvc3UNkaRoYEFQ3ZUn7/A2NPScs7cErByxXcujTWLLV2sAMzB2+sprlLCWt34L4P8O31bfMtcjIyDAprnm/BHBOLCZqEBSNHUdlN08uemt5CMWx67tGO94PEADie9NmGOdCjZonPlNmCXTpbaoopknLOGM8XZluw56RPKeRzGZxLdjoGe6dwsanAR6uPw6mosKahmDOm2HE4EWpSYzMhNL+g2XE4GKJLk5TTXP4GNjswntHJ0N734SQLMA/VT9RT272TfjbgdgGzECJRtd27oWGzAUO5gAdsKMeWcgd+oUe5hjPa2QzTXIUNFXc4JKBaU3rB3kDIV/8DouwBkanRjIOof7xZImwnFaIeYeX4rpzM1NNTU6IhCDnfgi5TNHnsVu5D95tF7YprxvR6/Eaj1VwyOUsKFtRmv03N8kis3GgQJOeuUwqkUpUv8okdsjWMf73p+fnxQn3lHqZiXcJqFH1xl36YVPdbM8MUVJLvelZseGRchAnQIaqTQD10gKEezW+YefiK65Q+p/MyeYA/RHfh2+sFuNFgL1li5oFS+Ft57odHrrfDZl0tmvARAr65eellLPXwkJWHYXVU56YDIY+FTUoX9xfn8imHz9n0ign7eAefZRFg+AYZLi3Z1pjP8g0MFcyuus+2knyO+9JqqtdduCvoeOYRoq1xceQTfNovkk7i+lfjy63QvGDcuJFp618VNnZ1X929ua2mzpmnLFUmZINd7VcVFRUVFRUVFRX1Dxefbh6b6BgqAAAAAElFTkSuQmCC',
  loading: 'http://m.lifevc.com/h5/static/images/itemdefault.png',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
