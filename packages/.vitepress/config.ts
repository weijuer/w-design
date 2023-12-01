import { getFunctionsSideBar } from './utils/update'

const FunctionsSideBar = await getFunctionsSideBar()

console.log('FunctionsSideBar', FunctionsSideBar)

export default {
    title: 'W.Design',
    description: 'A simple design system based on w-design',

    markdown: {

    },

    themeConfig: {
        base: './',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
            { text: 'Get Started', link: '/' },
            { text: 'W Design', link: '/w-design-vue/' },
            { text: 'W Use', link: '/w-use/' },
        ],
        sidebar: {
            '/w-use': FunctionsSideBar,
            '/w-design-vue': FunctionsSideBar,
        }
    },
    rewrites: {
        ':pkg/src/:fname/(.*)': ':pkg/:fname/index.md'
    }
}

