import { defineConfig } from 'vite';
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
      lib: resolve('lib'),
      Components: resolve('src/components'),
      Layout: resolve('src/components/layout'),
      Widgets: resolve('src/components/widgets'),
      Assets: resolve('src/assets'),
      Hooks: resolve('src/hooks'),
      Utils: resolve('src/utils')
    },
    dedupe: ['vue']
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      name: 'w-design-vue'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    // dts({
    //   tsConfigFilePath: './tsconfig.declaration.json'
    // }),
    VueMacros({
      plugins: {
        vue: vue(),
      }
    })
  ]
});
