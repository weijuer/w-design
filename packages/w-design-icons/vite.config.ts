import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'
// import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    target: 'esnext',
    minify: false,
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      name: 'w-design-icon',
      fileName: () => '[name].js'
    }
  },
  plugins: [
    dts({
      rollupTypes: true,
    })
  ]
});
