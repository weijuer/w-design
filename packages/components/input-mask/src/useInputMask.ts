import { SetupContext, computed, nextTick, onMounted, ref, watch } from 'vue'
import { type InputMaskProps, InputMaskEmits } from './interface'
import { Numeric, RecordType, copy } from '../../_utils'

const DIGIT_RE = /^[0-9]$/
const LETTER_RE = /^[A-Za-zА-Яа-я]$/
const ALPHANNUMERIC_RE = /^[0-9A-Za-aА-Яа-я]$/

const DEFAULT_PLACEHOLDER_CHAR = '_'
const DEFAULT_FORMAT_CHARACTERS: RecordType = {
    '1': {
        // number
        validate: (char: string) => DIGIT_RE.test(char)
    },
    a: {
        // letter
        validate: (char: string) => LETTER_RE.test(char)
    },
    A: {
        // letter, forced upper case
        validate: (char: string) => LETTER_RE.test(char),
        transform: (char: string) => char.toUpperCase()
    },
    '*': {
        // alphanumeric
        validate: (char: string) => ALPHANNUMERIC_RE.test(char)
    },
    '#': {
        // alphanumeric, forced upper case
        validate: (char: string) => ALPHANNUMERIC_RE.test(char),
        transform: (char: string) => char.toUpperCase()
    }
}

function mergeFormatCharacters(formatCharacters: RecordType) {
    const merged = copy(DEFAULT_FORMAT_CHARACTERS)
    if (formatCharacters) {
        const chars = Object.keys(formatCharacters)
        for (let i = 0, l = chars.length; i < l; i++) {
            const char = chars[i]
            if (formatCharacters[char] == null) {
                delete merged[char]
            } else {
                merged[char] = formatCharacters[char]
            }
        }
    }
    return merged
}

export const useInputMask = (props: InputMaskProps, emit: SetupContext<InputMaskEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const placeholderChar = props.placeholderChar || DEFAULT_PLACEHOLDER_CHAR
    let formatCharacters: RecordType = DEFAULT_FORMAT_CHARACTERS

    let pattern: string = ''

    const inputMaskAttrs = computed(() => {
        const {
            name,
            mask,
            disabled,
            readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect
        } = props

        console.log('inputMaskAttrs:=>inputValue', inputValue.value)

        return {
            ref: _ref,
            name,
            mask,
            type: 'text',
            value: inputValue.value,
            disabled,
            readonly: readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect,
            onInput,
            onKeydown,
            onCut,
            onPaste
        }
    })

    const initMask = () => {
        const { mask } = props
        if (mask) {
            if (typeof mask === 'string') {
                pattern = mask
            } else {
                const { formatCharacters: fcs } = mask
                formatCharacters = mergeFormatCharacters(fcs)
            }
        }
    }

    const isEditableIndex = (index: number) => {
        return formatCharacters[pattern[index]]
    }

    const isValidAtIndex = (char: string, index: number) => {
        return formatCharacters[pattern[index]].validate(char)
    }

    const transform = (char: string, index: number) => {
        const format = formatCharacters[pattern[index]]
        return typeof format.transform == 'function' ? format.transform(char) : char
    }

    const formatValue = (value: string) => {
        const valueBuffer = new Array(pattern.length)
        let valueIndex = 0

        for (let i = 0; i < pattern.length; i++) {
            if (isEditableIndex(i)) {
                if (value.length <= valueIndex && !isValidAtIndex(value[valueIndex], i)) {
                    break
                }

                valueBuffer[i] =
                    value.length > valueIndex && isValidAtIndex(value[valueIndex], i)
                        ? transform(value[i], i)
                        : ''
                valueIndex++
            } else {
                valueBuffer[i] = pattern[i]

                if (value.length > valueIndex && value[valueIndex] === pattern[i]) {
                    valueIndex++
                }
            }
        }

        return valueBuffer
    }

    const updateValue = (value: string) => {
        console.log('updateValue', value, props.modelValue)

        if (value !== props.modelValue) {
            const formattedValue = formatValue(value)
            inputValue.value = formattedValue.join('')

            emit('update:modelValue', formattedValue.join(''))
            emit('change', inputValue.value)

            // 找到下一个可输入的位置并设置光标
            const cursorIndex = formattedValue.indexOf(placeholderChar)

            // console.log('cursorIndex', cursorIndex)

            if (cursorIndex !== -1 && _ref.value) {
                nextTick(() => {
                    _ref.value?.setSelectionRange(cursorIndex, cursorIndex)
                })
            }
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value)
        }
    }

    const onKeydown = (event: KeyboardEvent) => {
        // 处理删除键，确保删除字符后光标位置正确
        if (['Backspace', 'Delete'].includes(event.key)) {
            nextTick(() => {
                onInput(event as unknown as InputEvent)
            })
        }
    }

    const blur = () => _ref.value?.blur()
    const focus = () => _ref.value?.focus()

    const onMousedown = (e: MouseEvent) => e.preventDefault()
    const onMouseup = (e: MouseEvent) => e.preventDefault()

    const onCut = (event: Event) => {
        event.preventDefault()
        if (_ref.value?.selectionStart !== _ref.value?.selectionEnd) {
            try {
                document.execCommand('copy')
            } catch (err) {
                console.error(err)
            }
        }
    }

    const onPaste = (event: ClipboardEvent) => {
        event.preventDefault()
        const text = event.clipboardData?.getData('text') || ''
        updateValue(text)
    }

    // const paste2 = async () => {
    //     const text = await navigator.clipboard.readText();
    //     updateValue(text)
    // }

    watch(
        () => props.modelValue,
        (modelValue: Numeric) => {
            console.log('watch', modelValue)
            inputValue.value = modelValue
        }
    )

    onMounted(() => {
        initMask()
        // formatValue(inputValue.value as string)
    })

    return {
        _ref,
        inputMaskAttrs,
        onMousedown,
        onMouseup,
        blur,
        focus
    }
}
