import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'

export default defineConfig({
    ...baseConfig,
    build: {
        ...baseConfig.build,
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
            external: ['vue'],
            output: {
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
