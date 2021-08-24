/**
 * 是否是中文
 * @returns
 */
const charRegx = /^[\u4e00-\u9fa5]$/
export const isCNChar = charRegx.test.bind(charRegx)

/**
 * 获取modules
 * @param {String} path
 * @returns
 */
export const getAllModules = (path) => {
  const modules = import.meta.globEager(path + '')
  const res = {}
  for (const { path, mod } of modules) {
    const name = path.split('/')[1]
    res[`w-${name}`] = mod?.default
  }
  return { res }
}
