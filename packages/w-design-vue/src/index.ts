import type { App, Plugin } from "vue"
import { INSTALLED_KEY, type SFCWithInstall } from '@w-design/utils'
import { version } from '../package.json'
import * as components from './components'

export * from './components'

const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    Object.keys(components).forEach((key) => {
        const component = components[key as keyof typeof components]
        if ((component as SFCWithInstall<Plugin>).install) {
            app.use((component as SFCWithInstall<Plugin>))
        }
    })
    app[INSTALLED_KEY] = true
};

export default {
    version,
    install
}