import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import resetStore from './strores/reset'

const pinia = createPinia()

pinia.use(resetStore)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
