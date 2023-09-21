
import type { App, Plugin } from "vue"
import { INSTALLED_KEY } from './constants'
import { version } from '../../package.json'
import { log } from './logUtil'

export const installer = (components: Plugin[]) => {
    const install = (app: App) => {
        if (app[INSTALLED_KEY]) return

        app[INSTALLED_KEY] = true
        components.forEach(c => app.use(c))
        app.config.globalProperties.$log = log;
        return app
    };

    return {
        version,
        install
    }
}