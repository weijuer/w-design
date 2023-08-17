import { ref, SetupContext } from 'vue'
import { type DetailsEmits, type DetailsProps } from './interface'

export const useDetails = (props: DetailsProps, emit: SetupContext<DetailsEmits>['emit']) => {

    const _ref = ref<HTMLElement>()
    const expanded = ref(false)

    const onClick = (event: MouseEvent) => {
        expanded.value = !expanded.value
        emit('click', event)
    }

    return { _ref, expanded, onClick }
}
