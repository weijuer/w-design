import { computed, onMounted, ref, SetupContext, watch } from 'vue'
import { type CheckboxEmits, type CheckboxProps } from './interface'

export const useCheckbox = (props: CheckboxProps, emit: SetupContext<CheckboxEmits>['emit']) => {
  const { checked, defaultChecked, indeterminate } = props
  const isChecked = ref(checked ? checked : defaultChecked)
  const isIndeterminate = ref(indeterminate)

  const _ref = ref<HTMLInputElement>()

  const checkboxClass = computed(() => {
    const { type, size, disabled } = props

    return [type ? 'w-checkbox__' + type : '', size ? 'w-checkbox__' + size : '', { 'is-disabled': disabled }]
  })

  const onChange = (event: Event) => {
    const { disabled } = props
    const { checked } = event.target as HTMLInputElement
    if (disabled) {
      return
    }

    console.log('onChange', checked, props.checked)

    if (props.checked === undefined) {
      isChecked.value = checked
    }

    emit('update:modelValue', checked)
    emit('change', event)
  }

  const onClick = (event: MouseEvent) => {
    emit('click', event)
  }

  const focus = () => {
    _ref.value?.focus()
  }

  const blur = () => {
    _ref.value?.blur()
  }

  onMounted(() => {
    if (props.autoFocus) {
      _ref.value?.focus()
    }
  })

  watch(
    () => props.indeterminate,
    (indeterminate) => {
      if (_ref.value) {
        _ref.value.indeterminate = indeterminate
      }
    },
    { immediate: true }
  )

  //   watch(
  //     () => props.modelValue,
  //     (modelValue) => {
  //       isChecked.value = modelValue as boolean
  //     },
  //     { immediate: true }
  //   )

  // const checkboxGroupContext: any = inject(CHECKBOX_KEY);

  return {
    _ref,
    checkboxClass,
    isChecked,
    isIndeterminate,
    focus,
    blur,
    onChange,
    onClick
  }
}
