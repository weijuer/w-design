import { ref, SetupContext } from 'vue'
import { type ProgressEmits, type ProgressProps } from './interface'

export const useProgress = (props: ProgressProps, emit: SetupContext<ProgressEmits>['emit']) => {

    const _ref = ref<HTMLElement>()
    const expanded = ref(false)

    const onClick = (event: MouseEvent) => {
        expanded.value = !expanded.value
        emit('click', event)
    }

    return { _ref, expanded, onClick }
}
