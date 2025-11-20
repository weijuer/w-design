import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'
import { resolve } from 'path'

export default defineConfig({
    ...baseConfig,
    build: {
        ...baseConfig.build,
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'WDesignChat',
            formats: ['umd'],
            fileName: format => `w-design-chat.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: assetInfo => {
                    if (assetInfo.names[0] === 'style.css') {
                        return 'w-design-chat.css'
                    }
                    return assetInfo.names[0] as string
                }
            }
        }
    }
})
