import { ref, SetupContext } from 'vue'
import { type SwitchEmits, type SwitchProps } from './interface'

export const useSwitch = (props: SwitchProps, emit: SetupContext<SwitchEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const { modelValue, defaultChecked } = props
    const isChecked = ref(defaultChecked ? defaultChecked : modelValue)

    // watch(isChecked, (isChecked) => {
    //   console.log('watch', isChecked)
    //   emit('update:modelValue', isChecked)
    // })

    const onChange = (event: Event) => {
        const { checked } = event.target as HTMLInputElement
        isChecked.value = checked
        emit('change', event)
        emit('update:modelValue', checked)
    }

    return { _ref, isChecked, onChange }
}
