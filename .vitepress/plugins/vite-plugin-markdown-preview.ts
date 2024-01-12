import type { Plugin } from 'vite'
// create-vitepress-demo
export default function MarkdownTransform(): Plugin {

    const virtualModuleId = 'virtual:markdown-preview'
    const resolvedVirtualModuleId = '\0' + virtualModuleId
    let codePreviewSource: string;

    return {
        name: 'markdown-preview',
        enforce: 'pre',
        resolveId(id) {
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },
        load(id) {
            if (id === resolvedVirtualModuleId) {
                return codePreviewSource
                return `const message = 'hello world'
export default message`
            }
        },
        async transform(code, id) {

            if (!id.endsWith('.md')) {
                return null
            }

            // Transform vue preview code blocks
            const vuePreviewBlockRegx = /```vue preview?\s*([\s\S]*?)\s*```/g
            const templateTagRegx = /<\/?template>\s*/g
            const templateRegx = /<template>([\s\S]*?)<\/template>/g
            const scriptRegx = /<script.*?>([\s\S]*?)<\/script>/g
            const styleRegx = /<style.*?>([\s\S]*?)<\/style>/g

            code = code.replace(vuePreviewBlockRegx, (match, code) => {

                const [template] = code.match(templateRegx) || ['']
                const [script] = code.match(scriptRegx) || ['']
                const [style] = code.match(styleRegx) || ['']

                // remove template
                const purityTemplate = template.replace(templateTagRegx, '')

                // return `<script>import Demo from 'virtual:markdown-preview';</script>`

                return `${purityTemplate}\n${script}\n${style}\n${match}\n`
            })

            // codePreviewSource = code

            return {
                code: code,
                map: this.getCombinedSourcemap(),
            }
        },
    }
}
