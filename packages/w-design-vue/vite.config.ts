import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
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
      Mocks: resolve('src/mocks'),
      Utils: resolve('src/utils'),
      _Common: resolve('src/components/_common')
    },
    dedupe: ['vue']
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import (reference) "${resolve('src/style/variables.less')}";`
      }
    }
  },
  optimizeDeps: {
    include: ['axios', 'pinia'],
    exclude: []
  },
  build: {
    minify: false,
    // css分离
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', '@w-design/utils', '@w-design/use'],
      input: ['src/index.ts', 'src/resolver/index.ts'],
      output: [
        {
          dir: 'es',
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          dir: 'lib',
          format: 'cjs',
          exports: 'named',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
        // {
        //   dir: 'dist',
        //   inlineDynamicImports: false,
        //   format: 'iife',
        //   name: 'WDesignVue',
        //   entryFileNames: '[name].js',
        //   exports: 'named',
        //   globals: {
        //     vue: 'Vue'
        //   }
        // }
      ]
    },
    lib: {
      entry: 'src/index.ts',
      name: 'WDesignVue'
    }
  },
  plugins: [
    vue()
    // dts({
    //   outDir: ['es', 'lib'],
    //   tsconfigPath: './tsconfig.declaration.json'
    // }),
  ]
})
