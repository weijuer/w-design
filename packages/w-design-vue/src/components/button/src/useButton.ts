import { computed, ref, SetupContext, useSlots } from 'vue'
import type { ButtonEmits, ButtonProps } from './interface'
export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {

    const _ref = ref<HTMLButtonElement>()
    const slots = useSlots()

    const buttonClass = computed(() => {
        const { type, icon, size, outlined, disabled, loading, light, round, ringed, flashed, dashed, circle } = props

        return [
            type ? 'w-button__' + type : '',
            size ? 'w-button__' + size : '',
            icon || (loading && !slots.default) ? 'w-button__icon' : '',
            {
                'is-disabled': disabled || loading,
                'is-outlined': outlined,
                'is-loading': loading,
                'is-light': light,
                'is-round': round,
                'is-dashed': dashed,
                'is-ringed': ringed,
                'is-flashed': flashed,
                'is-circle': circle
            }
        ]
    })

    const handleClick = (evt: MouseEvent) => {
        emit('click', evt)
    }

    return { _ref, buttonClass, handleClick }
}