import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
// import wd from 'w-design-vue'
// import 'w-design-vue/index.css'

const app = createApp(App)

app.use(router)
// app.use(wd)
app.mount('#app')
