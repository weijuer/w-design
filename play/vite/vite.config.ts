import Vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const resolve = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig(({ command }) => ({
    plugins: [Vue()],
    resolve:
        command === 'build'
            ? {}
            : {
                  alias: [
                      {
                          find: '@',
                          replacement: resolve('src')
                      },
                      {
                          find: 'w-design-vue',
                          replacement: resolve('../../packages/design-vue')
                      },
                      {
                          find: 'w-design-chat',
                          replacement: resolve('../../packages/design-chat/src')
                      },
                      {
                          find: /^@w-design\/(.*)$/,
                          replacement: resolve('../../packages/$1')
                      }
                  ]
              },
    build: {
        minify: false,
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes('@w-design/use')) return 'w-use'
                    else return 'vendor'
                }
            }
        }
    }
}))
