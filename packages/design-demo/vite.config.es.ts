import { mergeConfig } from 'vite'
import baseConfig from './vite.base.config'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default mergeConfig(baseConfig, {
    plugins: [
        dts({
            outDir: 'es',
            tsconfigPath: './tsconfig.json',
            insertTypesEntry: true
        })
    ],
    build: {
        outDir: 'es',
        target: 'esnext',
        minify: false,
        lib: undefined,
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue'],
            input: resolve(__dirname, 'src/index.ts'),
            preserveEntrySignatures: 'strict',
            output: {
                format: 'es',
                dir: 'es',
                preserveModules: true,
                preserveModulesRoot: resolve(__dirname, 'src'),
                entryFileNames: '[name].js'
            }
        }
    }
})
