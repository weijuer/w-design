import { ref, SetupContext, watch } from 'vue'
import { type SwitchEmits, type SwitchProps } from './interface'

export const useSwitch = (props: SwitchProps, emit: SetupContext<SwitchEmits>['emit']) => {
  const _ref = ref<HTMLInputElement>()
  const isChecked = ref(props.modelValue)

  // watch(isChecked, (isChecked) => {
  //   console.log('watch', isChecked)
  //   emit('update:modelValue', isChecked)
  // })

  const onChange = (event: Event) => {
    const { checked } = event.target as HTMLInputElement;
    emit('change', event)
    emit('update:modelValue', checked)
  }

  return { _ref, isChecked, onChange }
}
