import { createApp } from 'vue'
import App from './App.vue'
import wd from 'packages'
import { worker } from './mocks/browser'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

createApp(App).use(wd).mount('#app')
