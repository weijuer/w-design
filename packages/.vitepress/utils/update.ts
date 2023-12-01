import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const DIR_PACKAGE = resolve(__dirname, '..')
export const DIR_ROOT = resolve(__dirname, '../../..')
export const DIR_SRC = resolve(DIR_ROOT, 'packages')

export async function listFunctions(dir: string, ignore: string[] = []) {
    const files = await fg('*', {
        onlyDirectories: true,
        cwd: dir,
        ignore: [
            '_*',
            'dist',
            'node_modules',
            ...ignore,
        ],
    })
    files.sort()
    return files
}

export async function getFunctionsSideBar(pkgName: string = 'w-use') {
    const dir = join(DIR_SRC, `${pkgName}/src`)
    const functions = await listFunctions(dir)

    console.log('functions', functions)

    const sidebar = {
        text: pkgName,
        items: functions.map(name => ({
            text: name,
            link: `/${pkgName}/${name}/`,
        })),
    }

    return [sidebar]
}