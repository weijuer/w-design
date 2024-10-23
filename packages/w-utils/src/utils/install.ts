import type { App, Plugin, Component } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T = Component>(component: Component, target?: T): SFCWithInstall<T> => {
  const sfcWithInstall = target ?? component

  ;(sfcWithInstall as SFCWithInstall<T>).install = (app: App) => {
    const { name } = component

    if (name) {
      app.component(name, component)
    }
  }

  return sfcWithInstall as SFCWithInstall<T>
}
