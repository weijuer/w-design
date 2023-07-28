<p align="center">
    <img alt="logo" src="https://avatars.githubusercontent.com/u/12313268?s=100&v=5" >
</p>

<h1 align="center">W Design</h1>

<p align="center">A lightweight, customizable Vue3 UI library for web apps.</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/w-design-vue?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/weijuer/w-design-vue?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/w-design-vue.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.badgesize.io/https://unpkg.com/w-design-vue/lib/w-design-vue.umd.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

<p align="center">
  🔥 <a href="https://weijuer.gitee.io/w-design-vue">文档网站（国内）</a>
  🌈 <a href="https://weijuer.github.io/w-design-vue">文档网站（GitHub）</a>
  🇨🇳 <a href="./README.zh-CN.md">中文版介绍</a>
</p>

---

## 🚀 Features

- 🎪 Interactive docs & demos
- 🚀 1KB Component average size (min+gzip)
- 🚀 80+ High quality components
- 🚀 Zero third-party dependencies
- 💪 Written in TypeScript
- 🍭 Support Vue 3
- 🍭 Support Tree Shaking
- 🌍 Support i18n

## 📦 Install

> It only works for Vue 3

```bash
# npm
npm i w-design-vue
# yarn
yarn add w-design-vue
```

## 🎭 Mock

```bash
# init msw syntax
npx msw init <PUBLIC_DIR>

# for example
npx msw init public
```

## 🧪 CDN

```html
<script src="https://unpkg.com/@w-design-vue/w-design-vue.umd.js"></script>
```

## 🦄 Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
// 全局引入样式文件
import 'w-design-vue/lib/style.css'
import wd from 'w-design-vue'

createApp(App).use(wd).mount('#app')
```

## 🖥️ Browser Support

W design vue supports modern browsers and Chrome >= 51、iOS >= 10.0 (same as Vue 3).

## 🌸 Core Team

Core contributors of W Design:

| [![Weijuer](https://avatars.githubusercontent.com/u/12313268?s=80&v=5)](https://github.com/weijuer/) |
| :-: |
| [Weijuer](https://github.com/weijuer/) |

## 🕹️ Start On Web IDE

[https://github.dev/weijuer/w-design-vue](https://github.dev/weijuer/w-design-vue)

## 🍀 LICENSE

W Design is [MIT](https://github.com/weijeur/w-design-vue/blob/main/LICENSE) licensed.