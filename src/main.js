import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import wd from 'packages';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(wd);
app.mount('#app');
