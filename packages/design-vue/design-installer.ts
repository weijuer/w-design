import { INSTALLED_KEY } from '@w-design/constants'
import { version } from './package.json'

import type { App, Plugin } from 'vue'

export const designInstaller = (components: Plugin[] = []) => {
    const install = (app: App) => {
        if (app[INSTALLED_KEY]) return

        app[INSTALLED_KEY] = true
        components.forEach(c => app.use(c))
    }

    return {
        install,
        version
    }
}
