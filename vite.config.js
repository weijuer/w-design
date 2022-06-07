import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      Layout: resolve('src/components/layout'),
      Assets: resolve('src/assets'),
      Utils: resolve('src/utils')
    }
  },
  build: {
    target: 'es6',
    outDir: 'lib',
    lib: {
      entry: 'packages/index.js',
      name: 'w-design-vue'
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
