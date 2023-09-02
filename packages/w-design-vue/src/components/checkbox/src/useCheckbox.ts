import { computed, inject, onMounted, ref, SetupContext, useSlots, watch } from 'vue'
import { CHECKBOXGROUP_KEY, type CheckboxEmits, type CheckboxProps } from './interface'

export const useCheckbox = (props: CheckboxProps, emit: SetupContext<CheckboxEmits>['emit']) => {
  const _ref = ref<HTMLInputElement>()
  const checkboxGroupContext: any = inject(CHECKBOXGROUP_KEY, null)
  const slots = useSlots()

  const { indeterminate } = props
  const isIndeterminate = ref(indeterminate)

  const isChecked = computed(() => {
    const { value, modelValue, defaultChecked } = props

    if (checkboxGroupContext) {
      return checkboxGroupContext.props.modelValue.includes(value)
    }

    return defaultChecked ? defaultChecked : modelValue
  })

  const isDisabled = computed(() => {
    const { disabled } = props
    if (checkboxGroupContext) {
      return checkboxGroupContext.props.disabled || disabled
    }

    return disabled
  })

  const checkboxClass = computed(() => {
    const { type, size, animate } = props

    return [
      type ? 'w-checkbox__' + type : '',
      size ? 'w-checkbox__' + size : '',
      slots.icon ? 'w-checkbox__icon' : '',
      { 'is-disabled': isDisabled.value, 'is-animate': animate }
    ]
  })

  const onChange = (event: Event) => {
    const { value } = props
    const { checked } = event.target as HTMLInputElement
    if (isDisabled.value) {
      return
    }

    if (checkboxGroupContext) {
      checkboxGroupContext.updateValue(value)
    } else {
      emit('update:modelValue', checked)
      emit('change', event)
    }
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
