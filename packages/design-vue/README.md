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

1.全量UMD引入

```html
<div id="app"></div>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@w-design/w-design-vue.umd.js"></script>

<script>
    const app = Vue.createApp({
        template: `
        <section>
            <w-button type="default">Default Button</w-button>
        </section>
        `,
    })

    app.use(wd)
    app.mount('#app')
</script>
```

2.  ESM部分引入
```html
<div id="app"></div>
<script type="importmap">
    {
        "imports": {
            "vue": "https://esm.sh/vue/dist/vue.esm-bundler.js",
            "@w-design/w-design-vue": "./node_modules/@w-design/w-design-vue/dist/index.mjs"
        }
    }
</script>
<script type="module">
    import { createApp } from "vue";
    import {WButton} from "@w-design/w-design-vue";

    const app = Vue.createApp({
        template: `
        <section>
            <w-button type="default">Default Button</w-button>
        </section>
        `,
    })

    app.use(wd)
    app.mount('#app')
</script>
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
