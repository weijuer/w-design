
import { INSTALLED_KEY } from 'packages/constants/key';
import { version } from './package.json';

export const installer = (components) => {
    const install = (app, options) => {

        if (app[INSTALLED_KEY]) return

        app[INSTALLED_KEY] = true

        const components = import.meta.globEager('./*/index.js');

        Object.values(components).map(({ default: component }) => {
            if (component.install) {
                app.use(component);
            }
        });

        if (options) {
            // 
            app.config.globalProperties.$message = (message) => {
                console.log(message);
            };
        }
    };

    return {
        version,
        install
    }
}