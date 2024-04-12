
export interface ImportInfo {
    as?: string
    name?: string
    from: string
}

export type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined

export interface WDesignVueResolverOptions {
    /**
     * import style css or sass with components
     *
     * @default 'css'
     */
    importStyle?: boolean | 'css' | 'sass'

    /**
     * exclude component name, if match do not resolve the name
     */
    exclude?: RegExp
}

function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
}

function getSideEffects(
    partialName: string,
    options: WDesignVueResolverOptions,
): SideEffectsInfo | undefined {
    const { importStyle = 'css' } = options

    if (!importStyle)
        return

    if (importStyle === 'sass') {
        return [
            `w-design-vue/es/components/${partialName}/src/${partialName}.scss`,
        ]
    } else {
        return [
            `w-design-vue/es/components/${partialName}/src/${partialName}.css`,
        ]
    }
}

/**
 * Resolver for W-Design-Vue
 * @link https://weijuer.github.io/w-design-vue/
 * @version @w-design-vue ^1.0.0, @vue ^3.2.0
 * @author weijuer
 */
export default function WDesignVueResolver(options: WDesignVueResolverOptions = {}) {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (options.exclude && name.match(options.exclude))
                return
            if (/^W[A-Z]/.test(name)) {
                const compName = name.slice(2)
                const partialName = kebabCase(compName)

                console.log('WDesignVueResolver', compName, partialName)

                return {
                    from: `w-design-vue/es/${partialName}`,
                    sideEffects: getSideEffects(partialName, options),
                }
            }
        },
    }
}