import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        // 自动生成类型声明文件 (.d.ts)
        dts({
            entryRoot: './src',
            outDir: ['./dist/es/src', './dist/lib/src'],
            // 指定 tsconfig 路径，确保类型解析正确
            tsconfigPath: '../../tsconfig.json'
        })
    ],
    build: {
        target: 'modules',
        // 打包输出目录
        outDir: 'dist',
        // 压缩
        minify: false,
        // CSS 分离
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'WDesignVue'
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: [
                {
                    format: 'es',
                    // 不用打包成一个文件，而是保留目录结构，方便按需引用 (Tree Shaking)
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].mjs',
                    dir: 'dist/es'
                },
                {
                    format: 'cjs',
                    preserveModules: true,
                    preserveModulesRoot: 'src',
                    entryFileNames: '[name].js',
                    dir: 'dist/lib',
                    exports: 'named'
                }
            ]
        }
    }
})
