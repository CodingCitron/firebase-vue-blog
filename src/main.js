import { createApp } from 'vue'
import 'material-icons/iconfont/material-icons.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import resetStore from './strores/reset'

const pinia = createPinia()

pinia.use(resetStore)

const app = createApp(App)

app.directive('click-outside', {
    bind () {
        this.event = event => this.vm.$emit(this.expression, event)
        this.el.addEventListener('click', this.stopProp)
        document.body.addEventListener('click', this.event)
    },   
    unbind() {
        this.el.removeEventListener('click', this.stopProp)
        document.body.removeEventListener('click', this.event)
    },

    stopProp(event) { 
        event.stopPropagation()
    }
})

app.use(router)
app.use(pinia)
app.mount('#app')

