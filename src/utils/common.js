import { resolve } from 'path'

/**
 * 路径处理
 * @param {*} path
 * @returns
 */
export function resolvePath(path = '') {
  return resolve(__dirname, path)
}

/**
 * 是否是中文
 * @returns
 */
const charRegx = /^[\u4e00-\u9fa5]$/
export const isCNChar = charRegx.test.bind(charRegx)
