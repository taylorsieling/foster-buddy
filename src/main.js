import { createApp } from "vue";
import { createPinia } from 'pinia'

import './assets/custom.scss'
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";
import router from "./router";
import VueAxios from 'vue-axios';
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'

createApp(App)
.use(router)
.use(createPinia())
.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})
.mount("#app");

import "bootstrap/dist/js/bootstrap.js"
