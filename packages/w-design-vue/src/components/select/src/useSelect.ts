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
        const { className, size, type, disabled } = props

        return [
            className,
            type ? 'w-select__' + type : '',
            size ? 'w-select__' + size : '',
            {
                'is-disabled': disabled
            }
        ]
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
        const { multiple } = props

        return multiple ? (inputValue.value as Numeric[]).join(',') : inputValue.value
    })

    const updateValue = (value: Numeric) => {
        const { modelValue = [], multiple } = props
        let checkedValue
        // multiple
        if (multiple) {
            checkedValue = (modelValue as Numeric[]).includes(value)
                ? (modelValue as Numeric[]).filter((option) => value !== option)
                : (modelValue as Numeric[]).push(value) && (modelValue as Numeric[]).slice()
        } else {
            checkedValue = value
        }

        emit('update:modelValue', checkedValue)
        emit('change', checkedValue)
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
        isExpanded,
        updateValue,
        isSelected,
        onToggle
    }
}
