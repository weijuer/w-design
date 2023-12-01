import { getFunctionsSideBar } from './utils/update'

const FunctionsSideBar = await getFunctionsSideBar()

console.log('FunctionsSideBar', JSON.stringify(FunctionsSideBar, null, 4))

export default {
    title: 'W.Design',
    description: 'A simple design system based on w-design',

    markdown: {

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

