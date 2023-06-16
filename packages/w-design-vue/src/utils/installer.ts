
import { INSTALLED_KEY } from './constants'
import { version } from '../../package.json'

import type { App, Plugin } from '@vue/runtime-core'

export const installer = (components: Plugin[]) => {
    const install = (app: App, options: any) => {
        if (app[INSTALLED_KEY]) return

        app[INSTALLED_KEY] = true
        components.forEach(c => app.use(c))
    };

    return {
        version,
        install
    }
}