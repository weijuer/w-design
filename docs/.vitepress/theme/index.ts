import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { VuePreview } from './components'

import 'w-design-vue/style.css'
import './styles/vue-preview.css'

export default {
  extends: DefaultTheme,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.component('VuePreview', VuePreview)
  }
} satisfies Theme
