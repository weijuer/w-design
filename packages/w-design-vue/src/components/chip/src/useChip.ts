import { SetupContext, computed, ref } from 'vue'
import { type ChipEmits, type ChipProps } from './interface'

export const useChip = (props: ChipProps, emit: SetupContext<ChipEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()

    const chipClass = computed(() => {
        const { size, type, outlined, flat, disabled } = props

        return [
            size ? 'w-chip__' + size : '',
            type ? 'w-chip__' + type : '',
            {
                'is-flat': flat,
                'is-outlined': outlined,
                'is-disabled': disabled
            }
        ]
    })

    const chipStyle = computed(() => ({
        backgroundColor: props.type ? '' : props.color
    }))

    const onClose = (event: MouseEvent) => {
        emit('close', event)
    }

    return { _ref, chipClass, chipStyle, onClose }
}
