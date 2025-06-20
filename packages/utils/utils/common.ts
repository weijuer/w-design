export const uuid = () => {
    let str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return str.replace(/[xy]/g, item => {
        const r = (Math.random() * 0x10) | 0
        const v = item === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(0x10)
    })
}

export const uuidv2 = () => {
    return crypto.randomUUID()
}

export const isObject = (val: unknown): val is Record<any, any> =>
    val !== null && typeof val === 'object'

// String utilities
export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')

// Array utilities
export const chunk = <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

export const unique = <T>(array: T[]): T[] => [...new Set(array)]

// Object utilities
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    const result = {} as Pick<T, K>
    keys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key]
        }
    })
    return result
}

// Date utilities
export const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return format.replace('YYYY', String(year)).replace('MM', month).replace('DD', day)
}

// Validation utilities
export const isEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const isURL = (url: string): boolean => {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}
