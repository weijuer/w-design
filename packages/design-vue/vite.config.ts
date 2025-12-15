import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: '.',
            outDir: ['es', 'lib'],
            tsconfigPath: './tsconfig.json'
        })
    ],
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
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `@import (reference) "${resolve('src/style/variables.less')}";`
            }
        }
    },
    optimizeDeps: {
        include: ['axios', 'pinia'],
        exclude: []
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: ['index.ts', 'resolver/index.ts'],
            name: 'WDesignVue'
        },
        rollupOptions: {
            external: ['vue'],
            // input: ['index.ts', 'resolver/index.ts'],
            output: [
                {
                    dir: 'es',
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: '.'
                },
                {
                    dir: 'lib',
                    format: 'cjs',
                    exports: 'named',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: '.'
                }
                // {
                //     dir: 'dist',
                //     inlineDynamicImports: false,
                //     format: 'iife',
                //     name: 'WDesignVue',
                //     entryFileNames: '[name].js',
                //     exports: 'named',
                //     globals: {
                //         vue: 'Vue'
                //     }
                // }
            ]
        }
    }
})
