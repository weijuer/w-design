import { ref, SetupContext } from 'vue'
import type { ButtonEmits, ButtonProps } from './interface'
export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {

    const _ref = ref<HTMLButtonElement>()
    const handleClick = (evt: MouseEvent) => {
        emit('click', evt)
    }

    return { _ref, handleClick }
}