import DefaultTheme from 'vitepress/theme'
import type { App, Ref } from 'vue'
import { Router, SiteData } from 'vitepress'
import { Preview } from './components'
// custom theme layout
// import Layout from './Layout.vue'

import { WButton } from '@design-demo'
// import { WButton } from 'w-design-demo'

export default {
    ...DefaultTheme,
    // Layout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }: { app: App; router: Router; siteData: Ref<SiteData> }) {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        // You can add global app components here
        app.component('Preview', Preview)
        app.component('WButton', WButton)
    }
}
