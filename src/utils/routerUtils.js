/**
 * 根据文件夹生成路由
 */
export function generateRoutes() {
  // 引入views下及其子目录下所有的.vue文件
  const modules = import.meta.glob('../views/**/*.vue');

  return Object.entries(modules).map(([fileName, component]) => {
    const [, parent, name] = fileName.match(/(?:views\/([\w\-]+)\/)?([\w\-]+)\.vue$/);
    const path = name === 'NotFound' ? '/:pathMatch(.*)*' : `/${name}`;
    return parent ? { name, path, parent, component } : { name, path, children: [], component };
  });
}
