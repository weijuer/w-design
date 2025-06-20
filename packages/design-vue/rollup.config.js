import { defineConfig } from 'rollup'
import merge from 'deepmerge'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import scss from 'rollup-plugin-scss'
import customProperties from 'postcss-custom-properties'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

const extensions = ['.mjs', '.js', '.json', '.ts']

const baseConfig = defineConfig({
    input: 'index.ts',
    external: ['vue'],
    plugins: [
        vue({
            style: {
                postcssPlugins: [
                    customProperties({
                        preserve: true
                    })
                ]
            }
        }),
        scss({
            includePaths: [
                '../../components/**/src' // 添加组件库样式路径
            ]
        }),
        json(),
        typescript({
            tsconfig: '../../tsconfig.json',
            sourceMap: true,
            declaration: true,
            declarationDir: 'es/types',
            exclude: ['node_modules/**']
        }),
        nodeResolve({
            extensions
        }),
        commonjs(),
        esbuild({
            target: 'esnext',
            sourceMap: true
        }),
        babel({
            extensions,
            babelHelpers: 'bundled'
        })
    ]
})

const umdConfig = defineConfig({
    output: {
        name: 'WDesignVue',
        file: 'dist/w-design-vue.min.js',
        format: 'umd',
        exports: 'named',
        globals: {
            vue: 'Vue'
        }
    }
})

const esmConfig = defineConfig({
    output: {
        format: 'esm',
        file: 'es/w-design-vue.js',
        preserveModules: true
    }
})

const devConfig = defineConfig({
    plugins: [
        replace({
            values: {
                __DEV__: JSON.stringify(true),
                'process.env.NODE_ENV': JSON.stringify('development')
            },
            preventAssignment: true
        })
    ]
})

const prodConfig = defineConfig({
    plugins: [
        replace({
            values: {
                __DEV__: JSON.stringify(false),
                'process.env.NODE_ENV': JSON.stringify('production')
            },
            preventAssignment: true
        }),
        terser()
    ]
})

export default [
    merge.all([baseConfig, umdConfig, devConfig]),
    merge.all([baseConfig, umdConfig, prodConfig]),
    merge.all([baseConfig, esmConfig, devConfig]),
    merge.all([baseConfig, esmConfig, prodConfig])
]
