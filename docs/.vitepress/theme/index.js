import DefaultTheme from 'vitepress/theme'
// custom theme layout
// import Layout from './Layout.vue'
import WDesign from '@w-design/w-design-vue'
import '@w-design/w-design-vue/index.css'

console.log("themes:==>", WDesign)

export default {
  ...DefaultTheme,
  // Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(WDesign)
  }
}
