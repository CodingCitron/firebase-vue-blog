import { createApp } from 'vue'
import 'material-icons/iconfont/material-icons.css'
import './assets/css/effect.css'
import './assets/css/common.css'
import './assets/css/button.css'
import './assets/css/task.css'
import './assets/css/theme.css'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import resetStore from './strores/reset'
import vClickOutside from 'click-outside-vue3'

const pinia = createPinia()
pinia.use(resetStore)

const app = createApp(App)

app.use(vClickOutside)
app.use(router)
app.use(pinia)
app.mount('#app')

