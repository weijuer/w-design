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

export interface WDesignChatResolverOptions {
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
    options: WDesignChatResolverOptions
): SideEffectsInfo | undefined {
    const { importStyle = 'css' } = options

    if (!importStyle || partialName.endsWith('-item')) return

    if (importStyle === 'sass') {
        return [`w-design-chat/es/components/${partialName}/style/${partialName}.scss`]
    } else {
        return [`w-design-chat/es/components/${partialName}/style/${partialName}.css`]
    }
}

/**
 * Resolver for W-Design-Chat components.
 * @link https://weijuer.github.io/w-design-chat/
 * @version w-design-chat ^1.0.0, @vue ^3.2.0
 * @author weijuer <https://github.com/weijuer>
 */
export default function WDesignChatResolver(
    options: WDesignChatResolverOptions = {}
): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (options.exclude && name.match(options.exclude)) return
            if (/^W[A-Z]/.test(name)) {
                const compName = name.slice(1)
                const partialName = kebabCase(compName)

                console.log('WDesignChatResolver', compName, partialName)

                return {
                    name,
                    from: 'design-chat',
                    // from: `w-design-chat/es/components/${partialName}`,
                    sideEffects: getSideEffects(partialName, options)
                }
            }
        }
    }
}
