import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import wd from 'packages';
import { worker } from './mocks/browser';
import 'virtual:svg-icons-register';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  // worker.start();
}

const app = createApp(App);

app.use(router);
app.use(wd);
app.mount('#app');
