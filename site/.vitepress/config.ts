import Inspect from 'vite-plugin-inspect'
import { replPlugin } from './plugins/vite-plugin-repl'
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
            md.use(replPlugin)
        }
    },
    vite: {
        // plugins: [Inspect(), markdownPreview()],
        resolve: {
            alias: {
                '@design-demo-src': resolve(__dirname, '../../packages/design-demo/src')
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
