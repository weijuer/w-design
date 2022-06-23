import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      lib: resolve('lib'),
      Layout: resolve('src/components/layout'),
      Assets: resolve('src/assets'),
      Utils: resolve('src/utils')
    },
    dedupe: [
      'vue'
    ]
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
  },
  plugins: [vue(), createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [resolve('src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
    inject: 'body-first',
    customDomId: '__w_svg_icons__',
  })],
});
