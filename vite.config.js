import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      Layout: resolve('src/components/layout'),
      Utils: resolve('src/utils')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve('packages/main.js'),
      name: 'WUi'
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
})
