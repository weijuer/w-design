import Inspect from 'vite-plugin-inspect'
import markdownPreview from './plugins/vite-plugin-markdown-preview'
import { replPlugin } from './plugins/repl-plugin'
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
                        },
                        {
                            text: 'Popover',
                            link: '/components/popover'
                        }
                    ]
                }
            ]
        }
    },
    markdown: {
        config: (md: any) => {
            md.use(markdownPreview)
            md.use(replPlugin)
        }
    },
    vite: {
        // plugins: [Inspect(), markdownPreview()],
        resolve: {
            alias: {
                'design-demo': resolve(__dirname, '../../packages/design-demo/src')
            }
        },
        optimizeDeps: {
            exclude: ['@vue/repl']
        }
    },
    srcDir: './docs'
    // rewrites: {
    //     ':pkg/src/:fname/(.*)': ':pkg/:fname/index.md',
    // }
}
