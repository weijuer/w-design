import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            entryRoot: 'src',
            outDir: ['es', 'lib'],
            tsconfigPath: './tsconfig.json'
        })
    ],
    build: {
        target: 'esnext',
        outDir: 'dist',
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: 'src/index.ts',
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
