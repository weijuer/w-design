import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: '../components',
            outDir: ['es', 'lib']
        })
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
            packages: resolve('packages')
        },
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
        // 输出目录
        // outDir: 'dist',
        minify: false,
        // CSS 分离
        cssCodeSplit: true,
        lib: {
            entry: 'index.ts',
            name: 'WDesignVue'
        },
        rollupOptions: {
            external: ['vue', '@w-design/utils', '@w-design/use'],
            input: ['index.ts', 'resolver/index.ts'],
            output: [
                {
                    dir: 'es',
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'src'
                },
                {
                    dir: 'lib',
                    format: 'cjs',
                    exports: 'named',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    preserveModulesRoot: 'src'
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
