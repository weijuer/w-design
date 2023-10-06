import { SetupContext, computed, provide, ref, watch } from 'vue'
import { SelectEmits, SelectProps, isOptionGroupArray, isOptionArray, isNumbericArray, Option, SELECT_KEY } from './interface'
import { Numeric } from '../../_utils'
import { useEventListener } from 'Hooks'

export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
    const _ref = ref<HTMLElement>()

    const { modelValue, defaultSelectedKeys } = props

    const inputValue = ref(defaultSelectedKeys ? defaultSelectedKeys : modelValue);
    const isExpanded = ref(false)

    const selectClass = computed(() => {
        const { className, size, type, loading, disabled } = props

        return [
            className,
            type ? 'w-select__' + type : '',
            size ? 'w-select__' + size : '',
            {
                'is-loading': loading,
                'is-disabled': disabled || loading,
            }
        ]
    })

    const isDisabled = computed(() => {
        const { disabled, loading } = props

        return disabled || loading
    })

    const formatOption = (options: Numeric[] = []): Option[] => {
        return options.map((option) => {
            return {
                label: option,
                value: option,
                selected: false,
                disabled: false
            }
        })
    }

    const optionGroupList = computed(() => {
        const { options = [] } = props

        // Options
        if (isOptionGroupArray(options)) {
            return options
        }
    })

    const optionList = computed(() => {
        const { options = [] } = props

        // Option
        if (isOptionArray(options)) {
            return options
        }

        if (isNumbericArray(options)) {
            return formatOption(options)
        }
    })

    const isOptGroup = computed(() => {
        const { options = [] } = props
        // const slots = useSlots()

        if (isOptionGroupArray(options)) {
            return true
        } else {
            return false
        }
    })

    const selectedText = computed(() => {
        const { multiple, placeholder } = props
        if (!inputValue.value || (<Numeric[]>inputValue.value).length === 0) {
            return placeholder
        }

        return multiple ? (inputValue.value as Numeric[]).join(',') : inputValue.value
    })

    const updateValue = (value: Numeric) => {
        const { modelValue = [], multiple } = props

        let checkedValue
        // multiple
        if (multiple) {
            const checkedList = <Numeric[]>modelValue
            checkedValue = checkedList.includes(value)
                ? checkedList.filter((option) => value !== option)
                : checkedList.push(value) && checkedList.slice()
        } else {
            checkedValue = <Numeric>modelValue !== value ? value : ''
        }

        emit('update:modelValue', checkedValue)
        emit('change', checkedValue)

        if (!multiple) {
            isExpanded.value = false
        }
    }


    const isSelected = (value: Numeric) => {
        const { multiple } = props
        // multiple
        if (multiple) {
            return (inputValue.value as Numeric[]).includes(value)
        } else {
            return inputValue.value === value
        }
    }

    const onToggle = () => {
        isExpanded.value = !isExpanded.value
    }

    const onBlur = (event: Event) => {
        if (!_ref.value!.contains(event.target as HTMLElement)) {
            isExpanded.value = false
        }
    }

    useEventListener(document, 'click', onBlur)

    watch(
        () => props.modelValue,
        (modelValue) => {
            inputValue.value = modelValue
        }
    )

    provide(SELECT_KEY, { props, updateValue });

    return {
        _ref,
        selectClass,
        optionGroupList,
        optionList,
        selectedText,
        isOptGroup,
        isDisabled,
        isExpanded,
        updateValue,
        isSelected,
        onToggle
    }
}
