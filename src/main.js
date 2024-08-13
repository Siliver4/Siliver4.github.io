// External lib
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

// Module
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia().use(piniaPersist))
app.use(router)
app.mount('#app')
