import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { parse } from '@vue/compiler-sfc'
import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import type { Plugin, ResolvedConfig } from 'vite'

const VIRTUAL_REGISTRY_ID = 'virtual:vue-preview-registry'
const RESOLVED_REGISTRY_ID = `\0${VIRTUAL_REGISTRY_ID}`
const VIRTUAL_SFC_PREFIX = 'virtual:vue-preview/sfc/'
const RESOLVED_SFC_PREFIX = VIRTUAL_SFC_PREFIX

export type ImportMapEntry =
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

export interface VuePreviewPluginOptions {
  defaultCollapsed?: boolean
  importMap?: Record<string, ImportMapEntry>
}

interface PreviewBlock {
  id: string
  source: string
}

export function createVuePreviewPlugin(options: VuePreviewPluginOptions = {}) {
  let config: ResolvedConfig | undefined
  const inlineBlocks = new Map<string, PreviewBlock>()

  return {
    markdown(md: MarkdownIt) {
      const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules)

      md.renderer.rules.fence = (tokens: Token[], idx: number, mdOptions, env, self: Renderer) => {
        const token = tokens[idx]
        const info = token.info.trim()

        if (!isVuePreviewFence(info)) {
          return defaultFence
            ? defaultFence(tokens, idx, mdOptions, env, self)
            : self.renderToken(tokens, idx, mdOptions)
        }

        const source = token.content
        const id = createPreviewId(source)
        const defaultCollapsed = getDefaultCollapsed(info, options.defaultCollapsed ?? true)
        inlineBlocks.set(id, { id, source })

        return `<VuePreview preview-id="${id}" :default-collapsed="${defaultCollapsed}" />`
      }
    },

    vite(): Plugin {
      return {
        name: 'vitepress-vue-preview',
        enforce: 'pre',

        configResolved(resolvedConfig) {
          config = resolvedConfig
        },

        resolveId(id) {
          if (id === VIRTUAL_REGISTRY_ID) return RESOLVED_REGISTRY_ID
          if (id.startsWith(VIRTUAL_SFC_PREFIX)) return id
        },

        load(id) {
          const blocks = getPreviewBlocks(config?.root, inlineBlocks)

          if (id === RESOLVED_REGISTRY_ID) {
            return createRegistryModule(blocks, options.importMap)
          }

          if (id.startsWith(RESOLVED_SFC_PREFIX) && !id.includes('?')) {
            const previewId = path.basename(id.slice(RESOLVED_SFC_PREFIX.length), '.vue')
            const block = blocks.get(previewId)

            if (!block) {
              throw new Error(`Cannot find vue preview block "${previewId}".`)
            }

            return rewriteImports(block.source, options.importMap)
          }
        },

        handleHotUpdate(ctx) {
          if (!ctx.file.endsWith('.md')) return

          inlineBlocks.clear()
          const registryModule = ctx.server.moduleGraph.getModuleById(RESOLVED_REGISTRY_ID)
          if (registryModule) ctx.server.moduleGraph.invalidateModule(registryModule)
        }
      }
    }
  }
}

function isVuePreviewFence(info: string) {
  const parts = info.split(/\s+/)
  return parts[0] === 'vue' && parts.includes('preview')
}

function getDefaultCollapsed(info: string, configuredDefault: boolean) {
  const parts = info.split(/\s+/)
  if (parts.includes('expanded')) return false
  if (parts.includes('collapsed')) return true
  return configuredDefault
}

function createPreviewId(source: string) {
  return `vp-${crypto.createHash('sha256').update(source).digest('hex').slice(0, 12)}`
}

function getPreviewBlocks(root = process.cwd(), inlineBlocks: Map<string, PreviewBlock>) {
  const blocks = new Map<string, PreviewBlock>()

  for (const file of walkMarkdownFiles(root)) {
    const content = fs.readFileSync(file, 'utf8')
    for (const source of extractPreviewBlocks(content)) {
      const id = createPreviewId(source)
      blocks.set(id, { id, source })
    }
  }

  for (const block of inlineBlocks.values()) {
    blocks.set(block.id, block)
  }

  return blocks
}

function walkMarkdownFiles(root: string) {
  const files: string[] = []
  const ignored = new Set(['node_modules', '.git', 'dist', 'cache'])

  function visit(dir: string) {
    if (!fs.existsSync(dir)) return

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue

      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        visit(fullPath)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath)
      }
    }
  }

  visit(root)
  return files
}

function extractPreviewBlocks(markdown: string) {
  const blocks: string[] = []
  const fenceRE = /^(`{3,}|~{3,})[ \t]*vue[ \t]+preview[^\n]*\n([\s\S]*?)^\1[ \t]*$/gm
  let match: RegExpExecArray | null

  while ((match = fenceRE.exec(markdown))) {
    blocks.push(match[2])
  }

  return blocks
}

function createRegistryModule(
  blocks: Map<string, PreviewBlock>,
  importMap: VuePreviewPluginOptions['importMap']
) {
  const cssImports: string[] = []
  const providerImports: string[] = []
  const styleVariables = new Map<string, string>()
  const providerVariables = new Map<string, string>()
  const importers = createImporterEntries(blocks, importMap)

  const previewEntries = [...blocks.values()].map(block => {
    const styles = collectPreviewStyles(block.source, importMap)
    const providers = collectPreviewProviders(block.source, importMap)
    const styleRefs = styles.map(stylePath => {
      const key = `${stylePath}?inline`
      let variable = styleVariables.get(key)

      if (!variable) {
        variable = `style_${styleVariables.size}`
        styleVariables.set(key, variable)
        cssImports.push(`import ${variable} from ${JSON.stringify(key)}`)
      }

      return variable
    })
    const providerRefs = providers.map(provider => {
      const importName = provider.name ?? 'StyleProvider'
      const importFrom = provider.from
      const key = `${importFrom}:${importName}`
      let variable = providerVariables.get(key)

      if (!variable) {
        variable = `provider_${providerVariables.size}`
        providerVariables.set(key, variable)
        providerImports.push(
          `import { ${importName} as ${variable} } from ${JSON.stringify(importFrom)}`
        )
      }

      return `{ component: ${variable}, props: ${JSON.stringify(provider.props ?? {})} }`
    })

    const localStyles = extractLocalStyles(block.source)
    const allStyles = [...styleRefs, ...localStyles.map(style => JSON.stringify(style))]

    return {
      id: block.id,
      loader: `${JSON.stringify(block.id)}: () => import(${JSON.stringify(`${VIRTUAL_SFC_PREFIX}${block.id}.vue`)})`,
      source: `${JSON.stringify(block.id)}: ${JSON.stringify(block.source)}`,
      styles: `${JSON.stringify(block.id)}: [${allStyles.join(', ')}]`,
      providers: `${JSON.stringify(block.id)}: [${providerRefs.join(', ')}]`
    }
  })

  return [
    ...cssImports,
    ...providerImports,
    `export const previewLoaders = {\n  ${previewEntries.map(entry => entry.loader).join(',\n  ')}\n}`,
    `export const previewSources = {\n  ${previewEntries.map(entry => entry.source).join(',\n  ')}\n}`,
    `export const previewStyles = {\n  ${previewEntries.map(entry => entry.styles).join(',\n  ')}\n}`,
    `export const previewProviders = {\n  ${previewEntries.map(entry => entry.providers).join(',\n  ')}\n}`,
    `export const previewImporters = {\n  ${importers.join(',\n  ')}\n}`,
    `export const previewImportMap = ${JSON.stringify(importMap ?? {})}`
  ].join('\n\n')
}

function createImporterEntries(
  blocks: Map<string, PreviewBlock>,
  importMap: VuePreviewPluginOptions['importMap'] = {}
) {
  const specifiers = new Set<string>(Object.keys(importMap))

  for (const block of blocks.values()) {
    for (const specifier of extractImportSpecifiers(block.source)) {
      specifiers.add(specifier)
    }
  }

  return [...specifiers]
    .filter(
      specifier => specifier !== 'vue' && !specifier.startsWith('.') && !specifier.startsWith('/')
    )
    .map(specifier => {
      const resolved = resolveMappedSpecifier(specifier, importMap)
      return `${JSON.stringify(specifier)}: () => import(${JSON.stringify(resolved)})`
    })
}

function rewriteImports(source: string, importMap: VuePreviewPluginOptions['importMap'] = {}) {
  return source
    .replace(
      /(\bimport\s+(?!type\b)(?:[\s\S]*?\s+from\s+)?['"])([^'"]+)(['"])/gm,
      (statement, start, specifier, end) => {
        return `${start}${resolveMappedSpecifier(specifier, importMap)}${end}`
      }
    )
    .replace(/(\bimport\(\s*['"])([^'"]+)(['"]\s*\))/g, (statement, start, specifier, end) => {
      return `${start}${resolveMappedSpecifier(specifier, importMap)}${end}`
    })
}

function resolveMappedSpecifier(
  specifier: string,
  importMap: VuePreviewPluginOptions['importMap']
) {
  const entry = importMap?.[specifier]
  if (!entry) return specifier
  if (typeof entry === 'string') return entry
  return entry.from ?? specifier
}

function collectPreviewStyles(
  source: string,
  importMap: VuePreviewPluginOptions['importMap'] = {}
) {
  const styles = new Set<string>()

  for (const specifier of extractImportSpecifiers(source)) {
    const entry = importMap[specifier]
    if (!entry || typeof entry === 'string') continue

    if (entry.style) styles.add(entry.style)
    for (const style of entry.styles ?? []) styles.add(style)
  }

  return [...styles]
}

function collectPreviewProviders(
  source: string,
  importMap: VuePreviewPluginOptions['importMap'] = {}
) {
  const providers: Array<
    NonNullable<Exclude<ImportMapEntry, string>['styleProvider']> & { from: string }
  > = []

  for (const specifier of extractImportSpecifiers(source)) {
    const entry = importMap[specifier]
    if (!entry || typeof entry === 'string' || !entry.styleProvider) continue

    providers.push({
      ...entry.styleProvider,
      from: entry.styleProvider.from ?? entry.from ?? specifier
    })
  }

  return providers
}

function extractImportSpecifiers(source: string) {
  const specifiers = new Set<string>()
  const scripts = source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)

  for (const script of scripts) {
    const content = script[1]
    const staticImportRE = /^\s*import\s+(?!type\b)(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]\s*;?/gm
    const dynamicImportRE = /\bimport\(\s*['"]([^'"]+)['"]\s*\)/g
    let match: RegExpExecArray | null

    while ((match = staticImportRE.exec(content))) specifiers.add(match[1])
    while ((match = dynamicImportRE.exec(content))) specifiers.add(match[1])
  }

  return specifiers
}

function extractLocalStyles(source: string) {
  const { descriptor } = parse(source)
  return descriptor.styles.map(style => style.content)
}
