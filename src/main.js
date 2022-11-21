import { createApp } from 'vue'
import "./index.css"
import router from './router/index'
import store from './store/index'
import App from './App.vue'


createApp(App).use(router).use(store).mount('#app')
