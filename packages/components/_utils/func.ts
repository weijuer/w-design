import { type Numeric } from './typings'

export const isString = (val: unknown): val is any => val !== null && typeof val === 'string'

export const isObject = (val: unknown): val is Record<any, any> =>
    val !== null && typeof val === 'object'

export const isDef = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
    isObject(val) && isFunction(val.then) && isFunction(val.catch)

export const isDate = (val: unknown): val is Date =>
    Object.prototype.toString.call(val) === '[object Date]' &&
    !Number.isNaN((val as Date).getTime())

export const inBrowser = typeof window !== 'undefined'

export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, '')
    return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
}

export const isIOS = (): boolean =>
    inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false

export const isNumeric = (val: Numeric): val is string =>
    typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)

export const formatDate = (dateStr: string, dateFormat: string = 'yyyy-mm-dd') => {
    const dateArr: any = dateStr.match(/(\d+)/g)
    const newDate: any = {}
    let i = 0

    dateFormat.replace(/(yyyy|dd|mm)/g, (match: string) => {
        newDate[match] = i++
        return ''
    })
    return new Date(dateArr[newDate.yyyy], dateArr[newDate.mm] - 1, dateArr[newDate.dd])
}

export const sort = (a: any, b: any, direction: string, dateFormat: string = 'yyyy-mm-dd') => {
    return dateFormat && 'none' != direction
        ? 'asc' == direction || 'none' == direction
            ? formatDate(a, dateFormat) > formatDate(b, dateFormat)
            : formatDate(b, dateFormat) > formatDate(a, dateFormat)
        : isNaN(a) || isNaN(b)
          ? 'asc' == direction || 'none' == direction
              ? b.toString().localeCompare(a) < 0
              : a.toString().localeCompare(b) < 0
          : 'asc' == direction || 'none' == direction
            ? Number(a) > Number(b)
            : Number(b) > Number(a)
}

export function extend(dest: Record<any, any>, src: Record<any, any>) {
    if (src) {
        const props = Object.keys(src)
        for (let i = 0, l = props.length; i < l; i++) {
            dest[props[i]] = src[props[i]]
        }
    }
    return dest
}

export function copy(obj: object) {
    return extend({}, obj)
}

export const toCamelCase = (str: string): string =>
    str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
