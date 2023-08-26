import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      name: 'w-design-icon',
      fileName: 'w-design-icon'
    }
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolve('src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-first',
      customDomId: '__w_svg_icons__'
    })
  ]
});
