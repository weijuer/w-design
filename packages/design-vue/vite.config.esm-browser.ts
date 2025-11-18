import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve('src'),
            packages: resolve('packages')
        },
        dedupe: ['vue']
    },
    build: {
        // dist 目录
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            formats: ['es'],
            fileName: () => 'w-design-vue.mjs'
        },
        rollupOptions: {
            // 保持 vue 外部化
            external: ['vue', '@w-design/utils', '@w-design/use']
            // UMD 里的 globals 在 es 格式下不需要
        }
    }
})
