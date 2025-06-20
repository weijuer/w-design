import { SetupContext, computed } from 'vue'
import { SpinnerEmits, SpinnerProps } from './interface'

export const useSpinner = (props: SpinnerProps, emit: SetupContext<SpinnerEmits>['emit']) => {
    const spinnerClass = computed(() => {
        const { className, type, size } = props

        return [className, type ? 'w-spinner__' + type : '', size ? 'w-spinner__' + size : '']
    })

    const onClose = () => {
        emit('close')
    }

    return {
        spinnerClass,
        onClose
    }
}
