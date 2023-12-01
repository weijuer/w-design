import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
    plugins: [
        Vue(),
    ],
    resolve: command === 'build'
        ? {}
        : {
            alias: {
                '@w-design/use': resolve(__dirname, '../../packages/w-use/src/index.ts'),
            },
        },
    build: {
        minify: false,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('@w-design/'))
                        return 'vueuse'
                    else
                        return 'vendor'
                },
            },
        },
    },
}))