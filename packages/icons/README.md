# 🥇W Design Vue

A simple collection of icons for W. Design based on Vue 3.x + Vite 2.x.

# 🚀 Features

- 🎪 Interactive docs & demos

# 📦 Install

> It only works for Vue 3

```bash
# npm
npm i @w-design/icons
# yarn
yarn add @w-design/icons
```

# CDN

1.全量UMD引入

```html
<div id="app"></div>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@w-design/w-design-icons.umd.js"></script>

<script>
    const app = Vue.createApp({
        template: `
        <section>
            <w-button type="default">Default Button</w-button>
        </section>
        `,
    })

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
            "@w-design/w-design-icons": "./node_modules/@w-design/w-design-icons/dist/index.mjs"
        }
    }
</script>
<script type="module">
    import { createApp } from "vue";
    import { Heart } from "@w-design/w-design-icons";

    const app = Vue.createApp({
        template: `
        <section>
            <w-button type="default">Default Button</w-button>
        </section>
        `,
    })

    app.mount('#app')
</script>
```

# 🦄 Usage

```js{3-5}
import { createApp } from 'vue'
import App from './App.vue'
// 全局引入样式文件
import wdicons from '@w-design/icons'

createApp(App).use(wdicons).mount('#app')
```

# 🌸 Thanks

This project is heavily inspired by the following awesome projects.

- [vitejs](https://github.com/vitejs/vite)

# 🧪 Developing

- [x] Heart

# License

MIT
