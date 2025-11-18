import type { App, Plugin } from 'vue'
import { INSTALLED_KEY } from '@w-design/utils'
import { version } from './package.json'

export const designInstaller = (components: Plugin[] = []) => {
    const install = (app: any) => {
        if (app[INSTALLED_KEY]) return

        app[INSTALLED_KEY] = true
        components.forEach(c => app.use(c))
    }

    return {
        install,
        version
    }
}
