import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: [{
        file: 'dist/bin/wd',
        format: 'cjs',
        banner: '#!/usr/bin/env node',
    }, {
        file: 'dist/lib/index.js',
        format: 'cjs',
    }],
    plugins: [commonjs(), json(), typescript()],
    external: ['node:fs/promises', 'path', 'commander', 'chalk'],
};
