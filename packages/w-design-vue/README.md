# 🥇W Design Vue

A simple components UI for blog based on Vue 3.x + Vite 2.x.

# 🚀 Features

- 🎪 Interactive docs & demos

# 📦 Install

> It only works for Vue 3

```bash
# npm
npm i w-design-vue
# yarn
yarn add w-design-vue
```

# Mock

```bash
# init msw syntax
npx msw init <PUBLIC_DIR>

# for example
npx msw init public
```

# CDN

```html
<script src="https://unpkg.com/@w-design-vue/w-design-vue.umd.js"></script>
```

# 🦄 Usage

```js{3-5}
import { createApp } from 'vue'
import App from './App.vue'
// 全局引入样式文件
import 'w-design-vue/lib/style.css'
import wd from 'w-design-vue'

createApp(App).use(wd).mount('#app')
```

# 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [vitejs](https://github.com/vitejs/vite)

# 🧪 Developing

- [x] aside 侧边栏
- [x] avatar 侧边栏
- [x] badge 标记
- [x] bredcrumb 面包屑
- [x] button 按钮
- [x] card 卡片
- [x] checkbox 多选框
- [x] checkbox2 多选框2
- [x] chip 多选框2
- [x] collapse 多选框2
- [x] container 布局容器
- [x] details 原生details
- [x] divider 分割线
- [x] footer 布局底部
- [x] grid 网格布局
- [x] guide 向导
- [x] header 布局头部
- [x] icon 图标
- [x] layout 布局layout
- [x] main 布局main

# License

MIT
