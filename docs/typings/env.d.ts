import type { Component, DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module 'virtual:vue-preview-registry' {
  export const previewLoaders: Record<string, () => Promise<{ default: Component }>>
  export const previewImporters: Record<string, () => Promise<Record<string, unknown>>>
  export const previewImportMap: Record<
    string,
    | string
    | {
        from?: string
        style?: string
        styles?: string[]
        styleProvider?: {
          from?: string
          name?: string
          props?: Record<string, unknown>
        }
      }
  >
  export const previewProviders: Record<
    string,
    Array<{ component: Component; props?: Record<string, unknown> }>
  >
  export const previewSources: Record<string, string>
  export const previewStyles: Record<string, string[]>
}
