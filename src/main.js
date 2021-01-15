import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Products from "./components/Products";
import Vue from 'vue';



createApp(App)
  .use(Products)
  .use(router)
  .mount("#app");

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
