import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import wd from '@w-design/w-design-vue';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(router);
app.use(wd);
app.mount('#app');
