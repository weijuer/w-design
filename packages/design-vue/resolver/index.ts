type Awaitable<T> = T | PromiseLike<T>
export interface ImportInfo {
    as?: string
    name?: string
    from: string
}

type SideEffectsInfo = (ImportInfo | string)[] | ImportInfo | string | undefined
interface ComponentInfo extends ImportInfo {
    sideEffects?: SideEffectsInfo
}
type ComponentResolveResult = Awaitable<string | ComponentInfo | null | undefined | void>
type ComponentResolverFunction = (name: string) => ComponentResolveResult
interface ComponentResolverObject {
    type: 'component' | 'directive'
    resolve: ComponentResolverFunction
}

type ComponentResolver = ComponentResolverFunction | ComponentResolverObject

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
    options: WDesignVueResolverOptions
): SideEffectsInfo | undefined {
    const { importStyle = 'css' } = options

    if (!importStyle || partialName.endsWith('-item')) return

    if (importStyle === 'sass') {
        return [`w-design-vue/es/components/${partialName}/src/${partialName}.scss`]
    } else {
        return [`w-design-vue/es/components/${partialName}/src/${partialName}.css`]
    }
}

/**
 * Resolver for W-Design-Vue
 * @link https://weijuer.github.io/w-design-vue/
 * @version w-design-vue ^1.0.0, @vue ^3.2.0
 * @author weijuer
 */
export default function WDesignVueResolver(
    options: WDesignVueResolverOptions = {}
): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (options.exclude && name.match(options.exclude)) return
            if (/^W[A-Z]/.test(name)) {
                const compName = name.slice(1)
                const partialName = kebabCase(compName)

                console.log('WDesignVueResolver', compName, partialName)

                return {
                    name,
                    from: 'w-design-vue',
                    // from: `w-design-vue/es/components/${partialName}`,
                    sideEffects: getSideEffects(partialName, options)
                }
            }
        }
    }
}
