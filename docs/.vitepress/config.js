const config = {
  // base: '/docs/', // 发布路径 `https://domain.com/` 变成 `https://domain.com/base/`
  title: 'W Design Vue',
  description: 'A simple components UI based on Vue 3.x + Vite 2.x.',
  lang: 'en-US',
  markdown: {
    lineNumbers: true,
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] }
  },
  // 默认主题配置
  themeConfig: {
    logo: './logo.png',
    repo: 'weijuer/w-design-vue',
    docsDir: 'packages',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    nav: require('./navbar'),
    sidebar: require('./sidebar')
  },
  head: [
    // ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Weijuer' }],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap', rel: 'stylesheet' }
    ]
  ]
}

module.exports = config
