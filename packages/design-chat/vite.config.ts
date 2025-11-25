import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: 'src',
            outDir: ['es', 'lib'],
            tsconfigPath: './tsconfig.json'
        })
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
            packages: resolve('packages')
        },
        dedupe: ['vue']
    },
    build: {
        target: 'esnext',
        outDir: 'dist',
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: ['src/index.ts', 'src/resolver/index.ts'],
            name: 'WDesignChat',
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['vue'],
            // input: ['src/index.ts'],
            output: [
                {
                    format: 'es',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].mjs',
                    dir: 'es'
                },
                {
                    format: 'cjs',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].js',
                    dir: 'lib',
                    exports: 'named'
                }
            ]
        }
    }
})
