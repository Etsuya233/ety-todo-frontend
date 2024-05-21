import { createApp } from 'vue'
import { createPinia } from "pinia";
import router from './router/router.js'
import App from './App.vue'
import './style.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app')