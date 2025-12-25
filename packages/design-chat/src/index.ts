import type { App } from 'vue'

import * as components from './components'
import * as webComponents from './web'

export * from './components'
export * from './web'

const install = (app: App) => {
    Object.values(components).forEach(component => {
        app.use(component)
    })

    Object.values(webComponents).forEach(component => {
        app.use(component)
    })
}

export default {
    version: '0.1.0',
    install
}
