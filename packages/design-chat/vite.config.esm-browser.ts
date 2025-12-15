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
        minify: false,
        outDir: 'dist',
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            name: 'WDesignChat',
            fileName: () => 'w-design-chat.mjs'
        },
        cssCodeSplit: true,
        rollupOptions: {
            // 保持 vue 外部化
            external: ['vue']
        }
    }
})
