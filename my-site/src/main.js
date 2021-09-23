import { createApp } from 'vue'
import App from './AppOne.vue'
import router from './router/index.js'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
