import type MarkdownIt from 'markdown-it'

// 覆盖 'fence' 规则以捕获 ```vue preview
export const replPlugin = (md: MarkdownIt) => {
    // 保存默认的 fence 渲染器
    const defaultFence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens: any[], idx: number, options: any, env: any, self: any) => {
        const token = tokens[idx]
        const info = token.info.trim() // info 是 ``` 后面的语言标识
        const title = token.info.trim().slice('vue preview'.length).trim()

        if (info === 'vue preview') {
            const rawCode = token.content.trim()
            const encodedCode = encodeURIComponent(rawCode)

            // 渲染我们的 <LiveRepl> 组件
            return `<LiveRepl raw-code="${encodedCode}" :is-encoded="true" />`
        }

        // 3. 对于所有其他代码块 (如 ```js, ```vue 等)
        return defaultFence(tokens, idx, options, env, self)
    }
}
