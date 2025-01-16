import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import pages from 'vite-plugin-pages';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import WDesignVueResolver from 'w-design-vue/resolver';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      lib: resolve('lib'),
      Layout: resolve('src/components/layout'),
      Widgets: resolve('src/components/widgets'),
      Assets: resolve('src/assets'),
      Hooks: resolve('src/hooks'),
      Utils: resolve('src/utils'),
      // 'w-design-vue': resolve('../../packages/w-design-vue/src/index.ts'),
    },
    dedupe: ['vue'],
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/variables.scss";',
      },
    },
  },
  optimizeDeps: {
    include: ['axios', 'pinia'],
    exclude: [],
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: 'packages/index.js',
      formats: ['es', 'umd'],
      name: 'w-design-vue',
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    pages({
      dirs: [
        { dir: 'src/views', baseRoute: '' },
        { dir: 'packages', baseRoute: 'packages' },
      ],
      extensions: ['md', 'vue'],
      exclude: ['**/packages/*/*.vue', '**/components/*/*.vue'],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve('src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-first',
      customDomId: '__w_svg_icons__',
    }),
    Components({
      dts: false,
      // 自己组件
      dirs: ['src/components'],
      extensions: ['vue'],
      // UI库
      resolvers: [
        WDesignVueResolver({
          importStyle: 'css',
        }),
      ],
    }),
  ],
});
