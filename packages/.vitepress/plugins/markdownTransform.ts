import { join, resolve } from 'node:path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'

export function MarkdownTransform(): Plugin {

    return {
        name: 'vueuse-md-transform',
        enforce: 'pre',
        async transform(code, id) {
            if (!id.match(/\.md\b/))
                return null

            // linkify function names

            // convert links to relative
            code = code.replace(/https?:\/\/vueuse\.org\//g, '/')

            const [pkg, _name, i] = id.split('/').slice(-3)

            if (i === 'index.md') {
                const frontmatterEnds = code.indexOf('---\n\n')
                const firstHeader = code.search(/\n#{2,6}\s.+/)
                const sliceIndex = firstHeader < 0 ? frontmatterEnds < 0 ? 0 : frontmatterEnds + 4 : firstHeader

                // Insert JS/TS code blocks
                const name = _name
                const { header } = await getFunctionMarkdown(pkg, name)

                if (header)
                    code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)

                code = code
                    .replace(/(# \w+?)\n/, `$1\n\n<FunctionInfo fn="${name}"/>\n`)
                    .replace(/## (Components?(?:\sUsage)?)/i, '## $1\n<LearnMoreComponents />\n\n')
                    .replace(/## (Directives?(?:\sUsage)?)/i, '## $1\n<LearnMoreDirectives />\n\n')
            }

            return code
        },
    }
}

const DIR_SRC = resolve(__dirname, '../..')
const GITHUB_BLOB_URL = 'https://github.com/vueuse/vueuse/blob/main/packages'

export async function getFunctionMarkdown(pkg: string, name: string) {
    const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`

    const dirname = join(DIR_SRC, pkg, name)
    const demoPath = ['demo.vue', 'demo.client.vue'].find(i => fs.existsSync(join(dirname, i)))


    const links = ([
        ['Source', `${URL}/index.ts`],
        demoPath ? ['Demo', `${URL}/${demoPath}`] : undefined,
        ['Docs', `${URL}/index.md`],
    ])
        .filter(i => i)
        .map(i => `[${i![0]}](${i![1]})`).join(' • ')


    const demoSection = demoPath
        ? demoPath.endsWith('.client.vue')
            ? `
            <script setup>
            import { defineAsyncComponent } from 'vue'
            const Demo = defineAsyncComponent(() => import('./${demoPath}'))
            </script>

            ## Demo

            <DemoContainer>
            <p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
            <ClientOnly>
            <Suspense>
                <Demo/>
                <template #fallback>
                Loading demo...
                </template>
            </Suspense>
            </ClientOnly>
            </DemoContainer>
            `
            : `
            <script setup>
            import Demo from \'./${demoPath}\'
            </script>

            ## Demo

            <DemoContainer>
                <p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
                <Demo/>
            </DemoContainer>
            `
        : ''

    const header = demoSection

    return {
        header,
    }
}

