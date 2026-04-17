export * from './components'
export * from './web'

// 工具函数
export * from './resolver'
export * from './utils/withInstall'

import type { App } from 'vue'

import * as components from './components'
import * as webComponents from './web'

const install = (app: App) => {
    Object.values(components).forEach(component => {
        if (component.install) {
            app.use(component)
        }
    })

    Object.values(webComponents).forEach(component => {
        if (component.install) {
            app.use(component)
        }
    })
}

export default {
    version: '0.1.0',
    install
}
