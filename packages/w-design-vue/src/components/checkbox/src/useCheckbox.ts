import { computed, inject, onMounted, ref, SetupContext, watch } from 'vue'
import { CHECKBOXGROUP_KEY, type CheckboxEmits, type CheckboxProps } from './interface'

export const useCheckbox = (props: CheckboxProps, emit: SetupContext<CheckboxEmits>['emit']) => {
  const _ref = ref<HTMLInputElement>()
  const checkboxGroupContext: any = inject(CHECKBOXGROUP_KEY, null);

  const { indeterminate } = props
  const isIndeterminate = ref(indeterminate)

  const isChecked = computed(() => {
    const { value, modelValue, defaultChecked } = props
    if (checkboxGroupContext) {
      return checkboxGroupContext.props.modelValue.includes(value)
    }

    return defaultChecked ? defaultChecked : modelValue;
  })

  const isDisabled = computed(() => {
    const { disabled } = props
    if (checkboxGroupContext) {
      return checkboxGroupContext.props.disabled || disabled
    }

    return disabled
  })

  const checkboxClass = computed(() => {
    const { type, size } = props

    return [type ? 'w-checkbox__' + type : '', size ? 'w-checkbox__' + size : '', { 'is-disabled': isDisabled.value }]
  })

  const onChange = (event: Event) => {
    const { checked } = event.target as HTMLInputElement
    if (isDisabled.value) {
      return
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

  return {
    _ref,
    checkboxClass,
    isChecked,
    isDisabled,
    isIndeterminate,
    focus,
    blur,
    onChange,
    onClick
  }
}
