import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/hotcss/hotcss.js' // 自定义 css

import '@/assets/styles/reset.css' // 自定义 css




createApp(App).use(store).use(router).mount('#app')
