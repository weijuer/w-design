import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html from '@rollup/plugin-html';
// 清空打包目录
import del from 'rollup-plugin-delete';

import pkg from './package.json';

// https://zhuanlan.zhihu.com/p/486644411
// ES module (for bundlers) build.
export default {
    input: 'packages/index.js',
    external: ['vue'],
    output: {
        file: pkg.browser,
        name: 'myLib',
        format: 'umd',
        globals: {
            vue: 'Vue'
        }
    },
    plugins: [
        del({
            targets: 'lib/*'
        }),
        vue(),
        postcss({
            plugins: [autoprefixer()],
            extract: 'index.css'
        }),
        json(),
        resolve(),
        commonjs(),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
            allowAllFormats: true,
        }),
        serve({
            contentBase: '',
            port: 8020
        }),
        livereload('lib'),
        html()
    ]
};
