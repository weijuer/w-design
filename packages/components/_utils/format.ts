import { isDef, isNumeric } from './func'
import { Numeric } from './typings'

export function addUnit(value?: Numeric, unit: string = 'px'): string | undefined {
    if (isDef(value)) {
        return isNumeric(value) ? `${value}${unit}` : String(value)
    }
    return undefined
}

const camelizeRE = /-(\w)/g

export const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => c.toUpperCase())

export const kebabCase = (str: string) =>
    str
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')
