/**
 * 是否是中文
 * @returns
 */
const charRegx = /^[\u4e00-\u9fa5]$/
export const isCNChar = charRegx.test.bind(charRegx)
