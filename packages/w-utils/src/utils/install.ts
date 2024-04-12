
import type { App, Plugin } from "vue"

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends { name: string }>(comp: T) => {

    (comp as SFCWithInstall<T>).install = (app: App): void => {
        app.component(comp.name, comp);
    }

    return comp as SFCWithInstall<T>
}