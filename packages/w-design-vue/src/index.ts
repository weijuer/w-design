import type { App } from "vue"
import { INSTALLED_KEY } from './utils/constants'
import { version } from '../package.json'
import * as components from './components'
import { log } from './utils'
export * from './components'

export const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    Object.keys(components).forEach((key) => {
        const component = components[key as keyof typeof components]
        if (component.install) {
            app.use(component)
        }
    })
    app[INSTALLED_KEY] = true
    app.config.globalProperties.$log = log;
    // app.config.globalProperties.$info = components.info;
    return app
};

export { version }

export default {
    version,
    install
}