import {version} from '../package.json';
import { generateModules } from 'Utils/utils';

// 引入组件
const installs = import.meta.globEager('./*/index.js');

// vite
const modules = generateModules(installs);

// 注册组件
const install = (Vue) => {
  Object.values(installs).map((mod) => {
    Vue.use(mod.default);
  });
};

export { modules, version, install };

export default {
  version,
  install
};
