/**
 * 是否是中文
 * @returns
 */
const charRegx = /^[\u4e00-\u9fa5]$/;
export const isCNChar = charRegx.test.bind(charRegx);

/**
 * 引入当前文件夹及其子目录下所有的.vue文件
 * @param {Object} modules
 * @returns
 */
export function generateModules(modules) {
  const _modules = {};
  Object.entries(modules).map(([fileName, { default: component }]) => {
    const [, name] = fileName.match(/(?:\/([\w-]+)\/)?(?:[\w-]+)\.js$/);
    _modules[`W${firstToUpper(name)}`] = component;
  });
  return _modules;
}

/**
 * 根据文件夹生成路由
 */
export function generateRoutes() {
  // 引入views下及其子目录下所有的.vue文件
  const modules = import.meta.glob('../views/**/*.vue');
  return Object.entries(modules).map(([fileName, component]) => {
    const [, parent, name] = fileName.match(/(?:views\/([\w-]+)\/)?([\w-]+)\.vue$/);
    const path = name === 'NotFound' ? '/:pathMatch(.*)*' : `/${name}`;
    return parent ? { name, path, parent, component } : { name, path, children: [], component };
  });
}

/**
 * 字符串首字母大写
 * @param {String} str
 * @returns
 */
function firstToUpper(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
