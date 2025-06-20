import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { join, dirname, isAbsolute } from 'node:path'

function findRootDir(dir: string): string {
    if (existsSync(join(dir, 'vant.config.mjs'))) {
        return dir
    }

    const parentDir = dirname(dir)
    if (dir === parentDir) {
        return dir
    }

    return findRootDir(parentDir)
}

// Root paths
export const CWD = process.cwd()
export const ROOT = findRootDir(CWD)
export const ES_DIR = join(ROOT, 'es')
export const LIB_DIR = join(ROOT, 'lib')
export const DOCS_DIR = join(ROOT, 'docs')

// Relative paths
const __dirname = dirname(fileURLToPath(import.meta.url))
export const CJS_DIR = join(__dirname, '..', '..', 'cjs')
export const DIST_DIR = join(__dirname, '..', '..', 'dist')
export const CONFIG_DIR = join(__dirname, '..', 'config')
