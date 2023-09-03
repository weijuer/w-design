import { Numeric } from "./typings"

export const normalizedStyle = (prop: Numeric) => {
    if (typeof prop === 'number') {
        return prop + 'px'
    } else {
        return prop
    }
}