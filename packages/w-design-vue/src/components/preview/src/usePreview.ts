import { ref, SetupContext } from 'vue'
import { type PreviewEmits, type PreviewProps } from './interface'

export const usePreview = (props: PreviewProps, emit: SetupContext<PreviewEmits>['emit']) => {

    const _ref = ref<HTMLElement>()
    const expanded = ref(false)

    const onClick = (event: MouseEvent) => {
        expanded.value = !expanded.value
        emit('click', event)
    }

    return { _ref, expanded, onClick }
}
