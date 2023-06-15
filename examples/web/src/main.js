import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import '@w-design/w-design-vue/index.css'
import wd from '@w-design/w-design-vue'

const app = createApp(App)

app.use(router)
app.use(wd)
app.mount('#app')
