import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
// import dts from "vite-plugin-dts";

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
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      exclude: ['*/doc/*'],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
    Vue()
  ]
});
