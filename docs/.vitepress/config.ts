import type { UserConfig } from 'vite'
import { createVuePreviewPlugin } from './plugins/vuePreview'

const vuePreview = createVuePreviewPlugin({
  importMap: {
    'w-design-vue': {
      from: 'w-design-vue',
      styles: ['w-design-vue/style.css']
    }
  }
})

export default {
  title: 'W.Design Vue',
  description: 'A Vue 3 component library with simple, elegant design',
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/components/': [
        {
          title: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Badge 徽标', link: '/components/badge' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Chip 标签', link: '/components/chip' },
            { text: 'Divider 分割线', link: '/components/divider' }
          ]
        },
        {
          title: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'InputNumber 数字输入', link: '/components/input-number' },
            { text: 'InputPassword 密码输入', link: '/components/input-password' },
            { text: 'InputSearch 搜索框', link: '/components/input-search' },
            { text: 'InputMask 掩码输入', link: '/components/input-mask' }
          ]
        },
        {
          title: '反馈组件',
          items: [
            { text: 'Alert 警告', link: '/components/alert' },
            { text: 'Modal 弹窗', link: '/components/modal' },
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Details 详情', link: '/components/details' }
          ]
        },
        {
          title: '导航组件',
          items: [
            { text: 'Menu 菜单', link: '/components/menu' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' }
          ]
        },
        {
          title: '布局组件',
          items: [
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Grid 网格', link: '/components/grid' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Collapse 折叠', link: '/components/collapse' }
          ]
        },
        {
          title: '其他组件',
          items: [
            { text: 'Image 图片', link: '/components/image' },
            { text: 'Keyboard 键盘', link: '/components/keyboard' },
            { text: 'Guide 引导', link: '/components/guide' },
            { text: 'Pagination 分页', link: '/components/pagination' }
          ]
        }
      ]
    }
  },
  markdown: {
    config(md: any) {
      vuePreview.markdown(md)
    }
  },
  vite: {
    plugins: [vuePreview.vite()],
    resolve: {
      alias: {}
    },
    optimizeDeps: {
      exclude: ['@vue/repl']
    },
    ssr: {
      noExternal: ['@vue/repl']
    }
  } as UserConfig,
  srcDir: './docs'
}
