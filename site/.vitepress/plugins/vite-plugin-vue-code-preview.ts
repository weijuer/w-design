import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer'
import { hash } from 'vitepress'

export default function vueCodePreviewPlugin(md: MarkdownIt): void {
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const lang = token.info.trim()
        const code = token.content.trim()

        console.log('vueCodePreviewPlugin:', lang, code)

        if (lang === 'vue') {
            return `<Preview>${code}</Preview>`
        }

        return `<pre><code${self.renderAttrs(token)}>${code}</code></pre>`
    }
}
