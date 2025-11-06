import Inspect from 'vite-plugin-inspect'
import markdownPreview from './plugins/vite-plugin-markdown-preview'
// import vueCodePreview from './plugins/vite-plugin-vue-code-preview'
import { getFunctionsSideBar } from './utils/update'
import { resolve } from 'path'

export default {
    title: 'W.Design',
    description: 'A simple design system based on w-design',
    themeConfig: {
        // base: './',
        nav: [
            { text: 'Get Started', link: '/' },
            { text: 'Components', link: '/components/' }
        ],
        sidebar: {
            '/components/': [
                {
                    title: 'Components',
                    items: [
                        {
                            text: 'Index',
                            link: '/components/'
                        },
                        {
                            text: 'Button',
                            link: '/components/button'
                        }
                    ]
                }
            ]
        }
    },
    vite: {
        // plugins: [Inspect(), markdownPreview()],
        resolve: {
            alias: {
                'w-design-demo': resolve(__dirname, '../../packages/design-demo')
            }
        }
    },
    srcDir: './docs'
    // rewrites: {
    //     ':pkg/src/:fname/(.*)': ':pkg/:fname/index.md',
    // }
}
