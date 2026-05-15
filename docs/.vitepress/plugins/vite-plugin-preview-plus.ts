import type { Plugin } from 'vite'
import type MarkdownIt from 'markdown-it'
import { type Highlighter, createHighlighter } from 'shiki'
import { compileScript, compileTemplate, parse } from '@vue/compiler-sfc'
import { nanoid } from 'nanoid'

const demoModules = new Map<string, string>()

export function vitePluginPreviewPlus(): Plugin {
  return {
    name: 'vite-plugin-preview-plus',
    enforce: 'pre',

    async configResolved() {
      await createHighlighter({
        themes: ['vitesse-light', 'vitesse-dark'],
        langs: ['vue', 'html', 'ts', 'js']
      })
    },

    // 拦截虚拟模块
    resolveId(id) {
      if (id.startsWith('virtual:demo/')) return '\0' + id
    },

    load(id) {
      if (id.startsWith('\0virtual:demo/')) {
        const code = demoModules.get(id.replace('\0', ''))
        const { descriptor } = parse(code!)
        const script = compileScript(descriptor, { id })
        const template = compileTemplate({
          source: descriptor.template?.content ?? '<div></div>',
          id,
          filename: 'preview.vue'
        })
        return `${script.content}\n${template.code}`
      }
    }

    // 利用 VitePress 暴露的 markdown 配置钩子
    // 这里需要在用户 vitepress config 中手动调用我们的 applyMdEnhancer
    // 但我们可以通过定义一个虚拟模块文件写入 md 插件
    // 更简单：让用户按照指导在 config.ts 中调用下面导出的函数
  }
}

// 导出 markdown-it 插件生成函数
export function previewMdPlugin(highlighter: Highlighter) {
  return (md: MarkdownIt) => {
    const defaultFence = md.renderer.rules.fence!
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
      const token = tokens[idx]
      if (!token.info.includes('preview') || !token.info.startsWith('vue')) {
        return defaultFence(tokens, idx, options, env, slf)
      }

      const params = parseMeta(token.info)
      const code = token.content
      const moduleId = `virtual:demo/${nanoid(8)}`
      demoModules.set(moduleId, code)

      // 生成唯一组件名
      const componentName = `DemoComponent_${moduleId.replace('virtual:demo/', '')}`

      // 注入静态导入语句到环境中
      env.sfcBlocks ??= {}
      env.sfcBlocks.scripts ??= []
      env.sfcBlocks.scripts.push(`<script setup>
import ${componentName} from '${moduleId}'
</script>`)

      const highlighted = highlighter.codeToHtml(code, {
        lang: 'vue',
        theme: 'vitesse-light'
      })

      const titleAttr = params.title ? ` title="${escape(params.title)}"` : ''
      const descAttr = params.desc ? ` desc="${escape(params.desc)}"` : ''

      return `<DemoBlock code="${escape(code)}" highlighted-code="${escape(highlighted)}" :component="${componentName}"${titleAttr}${descAttr}></DemoBlock>`
    }
  }
}

function parseMeta(info: string) {
  const parts = info.split(/\s+/)
  const params: Record<string, string> = {}
  for (const p of parts) {
    const m = p.match(/^(\w+)=["']?(.+?)["']?$/)
    if (m) params[m[1]] = m[2]
  }
  return params
}
function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
