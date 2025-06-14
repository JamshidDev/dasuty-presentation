import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router'
import i18n from "./i18n/index.js"
import pinia from "./store/index.js"


const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)


const app = createApp(App);
app.use(naive)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
