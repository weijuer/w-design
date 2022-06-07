import { version } from '../package.json';
import 'Assets/stylus/index.styl';

export const install = (app) => {

  const components = import.meta.globEager('./*/index.js');

  Object.values(components).map(({ default: component }) => {
    if (component.install) {
      app.use(component);
    }
  });

  app.config.globalProperties.$message = message => {
    console.log(message);
  }

  return app;
};

export default {
  version,
  install
};
