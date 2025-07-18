import {
    ref,
    inject,
    computed,
    InjectionKey,
    getCurrentInstance,
    ComponentPublicInstance,
    ComponentInternalInstance
} from 'vue'

type ParentProvide<T> = T & {
    link(child: ComponentInternalInstance): void
    unlink(child: ComponentInternalInstance): void
    children: ComponentPublicInstance[]
    internalChildren: ComponentInternalInstance[]
}

export function useParent<T>(key: InjectionKey<ParentProvide<T>>) {
    const parent = inject(key, null)

    if (parent) {
        const instance = getCurrentInstance()!
        const { internalChildren } = parent

        // TODO:
        // link(instance);
        // onUnmounted(() => unlink(instance));

        const index = computed(() => internalChildren.indexOf(instance))

        return {
            parent,
            index
        }
    }

    return {
        parent: null,
        index: ref(-1)
    }
}
