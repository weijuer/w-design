/**
 * 根据文件夹生成路由
 */
export function generateRoutes() {
  // 引入views下及其子目录下所有的.vue文件
  const modules = import.meta.glob('../views/**/*.vue');

  return Object.entries(modules).reduce((total, [fileName, component]) => {
    let [, parent, name] = fileName.match(/(?:views\/([\w\-]+)\/)?([\w\-]+)\.vue$/);
    const path = `/${name}`;
    name = parent ? `${parent}-${name}` : name
    const _component = { name, path, component };
    if (parent) {
      const _parent = total.find(({ name }) => parent === name);
      if (_parent) {
        if (_parent.children) {
          _parent.children.push(_component);
        } else {
          _parent.children = [];
          _parent.children.push(_component);
        }
      } else {
        total.push({ name: parent, path: `/${parent}`, children: [_component] });
      }
    } else {
      total.push(_component);
    }
    return total;
  }, []);
}
