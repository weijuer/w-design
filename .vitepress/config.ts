import Inspect from 'vite-plugin-inspect'
import markdownPreview from './plugins/vite-plugin-markdown-preview'
import { getFunctionsSideBar } from './utils/update'

const FunctionsSideBar = await getFunctionsSideBar()

export default {
    title: 'W.Design',
    description: 'A simple design system based on w-design',
    vite: {
        plugins: [Inspect(), markdownPreview()]
    },
    themeConfig: {
        base: './',
        nav: [
            { text: 'Get Started', link: '/' },
            // { text: 'W Design', link: '/w-design-vue/' },
            { text: 'W Use', link: '/w-use/', activeMatch: '/w-use/' },
        ],
        sidebar: {
            '/w-use': FunctionsSideBar,
            // '/w-design-vue': await getFunctionsSideBar('w-desing-vue'),
        }
    },
    srcDir: './packages',
    rewrites: {
        ':pkg/src/:fname/(.*)': ':pkg/:fname/index.md',
    }
}

