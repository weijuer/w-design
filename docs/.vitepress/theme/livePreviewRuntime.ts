import { compileScript, compileStyle, compileTemplate, parse } from '@vue/compiler-sfc'
import type { Component } from 'vue'
import * as Vue from 'vue'
import * as ts from 'typescript'
import { previewImportMap, previewImporters } from 'virtual:vue-preview-registry'

type ModuleLike = Record<string, unknown>

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
  ...args: string[]
) => (...args: unknown[]) => Promise<Component>

export async function compileLivePreview(source: string, id: string) {
  const filename = `${id}.vue`
  const { descriptor, errors } = parse(source, { filename })

  if (errors.length > 0) throw new Error(formatErrors(errors))
  if (descriptor.script?.src || descriptor.scriptSetup?.src) {
    throw new Error('在线编辑暂不支持 <script src="...">，请把源码直接写在代码块中。')
  }

  let code = ''

  if (descriptor.script || descriptor.scriptSetup) {
    code = compileScript(descriptor, {
      id,
      inlineTemplate: Boolean(descriptor.scriptSetup)
    }).content
  }

  if (!descriptor.scriptSetup && descriptor.template) {
    const template = compileTemplate({
      id,
      filename,
      source: descriptor.template.content,
      scoped: descriptor.styles.some(style => style.scoped)
    })

    if (template.errors.length > 0) throw new Error(formatErrors(template.errors))
    code += `\n${template.code}\n__sfc__.render = render`
  }

  if (!descriptor.script && !descriptor.scriptSetup) {
    code += '\nconst __sfc__ = { name: "VuePreviewLiveEdit" }'
  }

  code = ts.transpileModule(code, {
    compilerOptions: {
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020
    }
  }).outputText

  const factory = new AsyncFunction(
    '__import',
    `${rewriteImports(code)}
if (typeof __sfc__ === 'undefined') {
  throw new Error('预览源码需要默认导出组件，或使用 <script setup>。')
}
return __sfc__`
  )

  return {
    component: await factory(resolveImport),
    styles: compileLocalStyles(source, id)
  }
}

async function resolveImport(specifier: string) {
  if (specifier === 'vue') return Vue

  const importer =
    previewImporters[specifier] ?? previewImporters[resolveMappedSpecifier(specifier)]
  if (!importer) {
    throw new Error(`无法解析预览依赖 "${specifier}"，请在 importMap 中配置该模块。`)
  }

  return importer() as Promise<ModuleLike>
}

function rewriteImports(code: string) {
  let index = 0

  code = code.replace(/^\s*import\s+type\s+[\s\S]*?\s+from\s+['"][^'"]+['"]\s*;?/gm, '')
  code = code.replace(
    /^\s*import\s+(?!type\b)([\s\S]*?)\s+from\s+(['"])([^'"]+)\2\s*;?/gm,
    (_statement, clause: string, _quote: string, specifier: string) => {
      return createImportReplacement(clause, specifier, index++)
    }
  )
  code = code.replace(/^\s*import\s+(['"])([^'"]+)\1\s*;?/gm, (_statement, _quote, specifier) => {
    return `await __import(${JSON.stringify(specifier)});`
  })
  code = code.replace(/\bexport\s+default\b/, 'const __sfc__ =')
  code = code.replace(/\bexport\s+function\s+render\b/, 'function render')
  code = code.replace(/\bexport\s+\{[^}]*\}\s*;?/g, '')

  return code
}

function createImportReplacement(clause: string, specifier: string, index: number) {
  const moduleName = `__preview_module_${index}`
  const normalized = clause.trim()
  const lines = [`const ${moduleName} = await __import(${JSON.stringify(specifier)});`]

  if (normalized.startsWith('* as ')) {
    lines.push(`const ${normalized.slice(5).trim()} = ${moduleName};`)
    return lines.join('\n')
  }

  if (normalized.startsWith('{')) {
    const destructured = createNamedImportDestructure(normalized)
    if (destructured) lines.push(`const ${destructured} = ${moduleName};`)
    return lines.join('\n')
  }

  const comma = normalized.indexOf(',')
  if (comma === -1) {
    lines.push(`const ${normalized} = ${moduleName}.default ?? ${moduleName};`)
    return lines.join('\n')
  }

  const defaultName = normalized.slice(0, comma).trim()
  const rest = normalized.slice(comma + 1).trim()
  lines.push(`const ${defaultName} = ${moduleName}.default ?? ${moduleName};`)

  if (rest.startsWith('{')) {
    const destructured = createNamedImportDestructure(rest)
    if (destructured) lines.push(`const ${destructured} = ${moduleName};`)
  } else if (rest.startsWith('* as ')) {
    lines.push(`const ${rest.slice(5).trim()} = ${moduleName};`)
  }

  return lines.join('\n')
}

function createNamedImportDestructure(namedImport: string) {
  const body = namedImport.replace(/^\{|\}$/g, '')
  const parts = body
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
    .filter(part => !part.startsWith('type '))
    .map(part => {
      const cleaned = part.replace(/^type\s+/, '')
      const alias = cleaned.match(/^(.+?)\s+as\s+(.+)$/)
      return alias ? `${alias[1].trim()}: ${alias[2].trim()}` : cleaned
    })

  return parts.length > 0 ? `{ ${parts.join(', ')} }` : ''
}

function compileLocalStyles(source: string, id: string) {
  const { descriptor, errors } = parse(source, { filename: `${id}.vue` })
  if (errors.length > 0) throw new Error(formatErrors(errors))

  return descriptor.styles.map((style, index) => {
    const result = compileStyle({
      id: `data-v-${id}`,
      filename: `${id}-${index}.css`,
      source: style.content,
      scoped: style.scoped
    })

    if (result.errors.length > 0) throw new Error(formatErrors(result.errors))
    return result.code
  })
}

function resolveMappedSpecifier(specifier: string) {
  const entry = previewImportMap[specifier]
  if (!entry) return specifier
  if (typeof entry === 'string') return entry
  return entry.from ?? specifier
}

function formatErrors(errors: unknown[]) {
  return errors.map(error => (error instanceof Error ? error.message : String(error))).join('\n')
}
