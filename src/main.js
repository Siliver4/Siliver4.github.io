// External lib
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

// Module
import App from './App.vue'
import router from './router'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

const app = createApp(App)
app.use(createPinia().use(piniaPersist))
app.use(router)
app.mount('#app')
