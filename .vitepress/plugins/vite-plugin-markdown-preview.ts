import type { Plugin } from 'vite'
import MarkdownIt from 'markdown-it';

export type MarkdownPreviewOptions = {
    component?: string
}

const extractBlock = (content: string, type: string) => {
    const regex = new RegExp(`<${type}[^>]*>([\\s\\S]*?)<\\/${type}>`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
}

export default function MarkdownPreview(options?: MarkdownPreviewOptions): Plugin {

    const virtualModuleId = 'virtual:markdown-preview'
    const resolvedVirtualModuleId = '\0' + virtualModuleId
    let codePreviewSource: string;



    return {
        name: 'vite:markdown-preview',
        enforce: 'pre',
        resolveId(id) {
            console.log('resolveId: (%s)', id)
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },
        load(id) {
            console.log('load:(%s)', id)
            if (id === resolvedVirtualModuleId) {
                // return codePreviewSource
            }
        },
        async transform(code, id) {

            if (!id.endsWith('.md')) {
                return null
            }

            const md = new MarkdownIt();
            // 自定义渲染器
            md.renderer.rules.fence = (tokens, idx, options, env, self) => {
                const token = tokens[idx];
                const info = token.info ? token.info.trim() : '';

                console.log('transform: fence', info)

                if (info === 'vue preview') {
                    const content = token.content;
                    const result = `
                        <template>
                        ${extractBlock(content, 'template')}
                        </template>
                        <script>
                        ${extractBlock(content, 'script')}
                        </script>
                        <style>
                        ${extractBlock(content, 'style')}
                        </style>
                    `;
                    return `<div class="vue-preview">${result}</div>`;
                }
                
                return self.renderToken(tokens, idx, options);
            };

            const transformedCode = md.render(code);

            return {
                code: `export default ${JSON.stringify(transformedCode)}`,
                map: null
            };

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
                map: null,
            }
        },
    }
}
