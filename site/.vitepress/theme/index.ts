import DefaultTheme from 'vitepress/theme'
import type { App, Ref } from 'vue'
import { Router, SiteData } from 'vitepress'

// import 'design-demo/dist/style.css'

// [新] 导入我们的 LiveDemo 组件
import { LiveRepl } from './components'

export default {
    ...DefaultTheme,
    // Layout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }: { app: App; router: Router; siteData: Ref<SiteData> }) {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        // You can add global app components here
        // app.component('WButton', WButton)

        // [新] 注册我们的实时 REPL 组件
        app.component('LiveRepl', LiveRepl)
    }
}
