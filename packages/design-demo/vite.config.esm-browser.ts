import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'
import { resolve } from 'path'

export default defineConfig({
    ...baseConfig,
    build: {
        ...baseConfig.build,
        // [关键] 我们复用 dist 目录
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            // [关键] 格式为 es
            formats: ['es'],
            // [关键] 文件名
            fileName: () => 'my-antd-lib.mjs'
        },
        rollupOptions: {
            // 保持 vue 外部化
            external: ['vue']
            // UMD 里的 globals 在 es 格式下不需要
        }
    }
})
