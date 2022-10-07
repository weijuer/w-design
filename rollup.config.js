// 解析json
import json from '@rollup/plugin-json';
// 将非ES6语法的包转为ES6可用
import commonjs from '@rollup/plugin-commonjs';
// ES6转ES5
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
// 替换待打包文件里的一些变量，如 process在浏览器端是不存在的
import resolve from '@rollup/plugin-node-resolve';
// Vue
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
// css加前缀
import autoprefixer from 'autoprefixer';
// css压缩
import cssnano from 'cssnano';
// 代码压缩
import { terser } from 'rollup-plugin-terser';
// 清空打包目录
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const isPro = !process.env.ROLLUP_WATCH;
console.log('isPro', isPro);

// https://zhuanlan.zhihu.com/p/486644411
export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    external: ['vue'],
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'myLib',
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
        plugins: [autoprefixer(), cssnano()],
        extract: 'index.css'
      }),
      json(),
      resolve(),
      commonjs(),
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
        allowAllFormats: true,
      }),
      terser()
    ]
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'esm',
      }
    ],
    plugins: [
      json(),
      commonjs(),
      vue(),
      postcss({
        plugins: [autoprefixer(), cssnano()],
        extract: 'index.css'
      }),
      // terser()
    ]
  }
];
