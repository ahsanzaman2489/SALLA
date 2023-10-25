import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ComponentLibrary } from 'vue-library';

const app = createApp(App)

app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
