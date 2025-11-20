import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'
import { resolve } from 'path'

export default defineConfig({
    ...baseConfig,
    build: {
        ...baseConfig.build,
        outDir: 'lib',
        lib: undefined,
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue'],
            input: resolve(__dirname, 'src/index.ts'),
            preserveEntrySignatures: 'strict',
            output: {
                format: 'cjs',
                dir: 'lib',
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'src'),
                entryFileNames: '[name].js'
            }
        }
    }
})
