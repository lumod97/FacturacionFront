import './assets/main.css'
import './assets/main.scss'
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

import { FApi } from "./service/axios";

window.FApi = FApi;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
