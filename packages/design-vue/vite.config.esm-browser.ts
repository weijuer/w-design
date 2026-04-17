import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('src')
            },
            {
                find: /^@w-design\/(.*)$/,
                replacement: resolve('../../packages/$1')
            }
        ],
        dedupe: ['vue']
    },
    build: {
        target: 'esnext',
        minify: true,
        cssCodeSplit: true,
        lib: {
            entry: 'index.ts'
        },
        rollupOptions: {
            // 保持 vue 外部化
            external: ['vue'],
            input: 'index.ts',
            output: [
                {
                    dir: 'dist',
                    format: 'umd',
                    exports: 'named',
                    name: 'WDesignVue',
                    globals: {
                        vue: 'Vue'
                    },
                    entryFileNames: 'w-design-vue.js'
                },
                {
                    dir: 'dist',
                    format: 'esm',
                    entryFileNames: 'w-design-vue.mjs'
                }
            ]
        }
    }
})
