import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer'
import { hash } from 'vitepress'

// 覆盖 'fence' 规则以捕获 ```vue preview
export const replPlugin = (md: MarkdownIt) => {
    // 保存默认的 fence 渲染器
    const defaultFence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const info = token.info.trim() // info 是 ``` 后面的语言标识
        const title = token.info.trim().slice('vue preview'.length).trim()

        console.log('replPlugin:-------', title)

        if (info === 'vue preview') {
            const rawCode = token.content.trim()
            const encodedCode = encodeURIComponent(rawCode)

            // 渲染我们的 <LiveReplDemo> 组件
            return `<LiveReplDemo raw-code="${encodedCode}" :is-encoded="true" />`
        }

        // 3. 对于所有其他代码块 (如 ```js, ```vue 等)
        return defaultFence(tokens, idx, options, env, self)
    }
}
