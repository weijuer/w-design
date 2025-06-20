import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// import WDesignVueResolver from 'w-design-vue/resolver';

const resolve = (path) => fileURLToPath(new URL(path, import.meta.url));

const baseAlias = [
  { find: '@', replacement: resolve('src') },
  { find: 'packages', replacement: resolve('packages') },
  { find: 'lib', replacement: resolve('lib') },
  { find: 'Layout', replacement: resolve('src/components/layout') },
  { find: 'Widgets', replacement: resolve('src/components/widgets') },
  { find: 'Assets', replacement: resolve('src/assets') },
  { find: 'Hooks', replacement: resolve('src/hooks') },
  { find: 'Utils', replacement: resolve('src/utils') },
];

const devAlias = [
  {
    find: 'w-design-vue',
    replacement: resolve('../../packages/design-vue'),
  },
  {
    find: /^@w-design\/(.*)$/,
    replacement: resolve('../../packages/$1'),
  },
];

export default defineConfig(({ command }) => ({
  resolve: {
    alias: command === 'serve' ? [...baseAlias, ...devAlias] : baseAlias,
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
        // WDesignVueResolver({
        //   importStyle: 'css',
        // }),
      ],
    }),
  ],
}));
