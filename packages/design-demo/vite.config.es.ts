import { defineConfig } from 'vite'
import baseConfig from './vite.base.config'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins!,
        dts({
            outDir: 'es',
            tsconfigPath: './tsconfig.json',
            insertTypesEntry: true
        })
    ],
    build: {
        ...baseConfig.build,
        outDir: 'es',
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
