import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    host: true
  },
  resolve: {

  },
  plugins: [
    vue()
  ]
});
