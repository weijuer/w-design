import { version } from '../package.json';
import { generateModules } from 'Utils/utils';
import 'Assets/stylus/index.styl';

// 引入组件
const installs = import.meta.globEager('./*/index.js');

// vite
const modules = generateModules(installs);

// 注册组件
const install = (app) => {
  Object.values(installs).map((mod) => {
    app.use(mod.default);
  });
};

export { modules, version, install };

export default {
  version,
  install
};
