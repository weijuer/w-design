import { SetupContext, computed, nextTick, onMounted, ref, watch } from 'vue'
import { type InputMaskProps, InputMaskEmits } from './interface'
import { Numeric, RecordType } from 'src/components/_utils'

const DIGIT_RE = /^[0-9]$/;
const LETTER_RE = /^[A-Za-zА-Яа-я]$/;
const ALPHANNUMERIC_RE = /^[0-9A-Za-aА-Яа-я]$/;

const DEFAULT_FORMAT_CHARS: RecordType = {
    '1': {
        // number
        vilidate: (char: string) => DIGIT_RE.test(char)
    },
    'a': {
        // letter
        vilidate: (char: string) => LETTER_RE.test(char)
    },
    'A': {
        // letter, forced upper case
        vilidate: (char: string) => LETTER_RE.test(char),
        transform: (char: string) => char.toUpperCase()
    },
    '*': {
        // alphanumeric
        vilidate: (char: string) => ALPHANNUMERIC_RE.test(char)
    },
    '#': {
        // alphanumeric, forced upper case
        vilidate: (char: string) => ALPHANNUMERIC_RE.test(char),
        transform: (char: string) => char.toUpperCase()
    }
}

export const useInputMask = (props: InputMaskProps, emit: SetupContext<InputMaskEmits>['emit']) => {
    const _ref = ref<HTMLInputElement>()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue)

    const inputMaskClass = computed(() => {
        const { splitted } = props

        return [
            {
                'is-splitted': splitted
            }
        ]
    })

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
            onPaste,
        }
    })

    const validate = (mask: string, char: string): boolean => {
        if (!char || !maskPattern[mask]) {
            return false
        } else {
            const charRegex = maskPattern[mask]
            return charRegex.test(char)
        }
    }

    const transform = (mask: string, char: string): string => {
        switch (mask) {
            case 'A':
            case '#':
                return char.toUpperCase()
            default:
                return char
        }
    }

    const applyMask = (value: string) => {

        const { mask = '', slotChar } = props

        let formattedValue = '';
        let valueIndex = 0;
        let maskIndex = 0;

        while (maskIndex < mask.length) {
            const maskChar = mask[maskIndex];
            const valueChar = value[valueIndex];
            const validValueChar = validate(maskChar, valueChar);

            if (maskChar === slotChar) {
                if (validValueChar) {
                    formattedValue += transform(maskChar, valueChar);
                    valueIndex++
                    maskIndex++
                } else {
                    formattedValue += maskChar;
                    valueIndex++
                    maskIndex++
                }
            } else {
                formattedValue += maskChar;
                valueIndex++
                maskIndex++
            }
        }

        return formattedValue;
    };


    const updateValue = (value: string) => {
        const { slotChar } = props

        if (value !== props.modelValue) {
            const formattedValue = applyMask(value)
            inputValue.value = formattedValue;
            emit('update:modelValue', formattedValue);

            // 找到下一个可输入的位置并设置光标
            const cursorIndex = formattedValue.indexOf(slotChar);

            console.log('cursorIndex', cursorIndex);

            if (cursorIndex !== -1 && _ref.value) {
                nextTick(() => {
                    _ref.value?.setSelectionRange(cursorIndex, cursorIndex);
                });
            }
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    const onKeydown = (event: KeyboardEvent) => {
        // 处理删除键，确保删除字符后光标位置正确
        if (['Backspace', 'Delete'].includes(event.key)) {
            nextTick(() => {
                onInput(event as unknown as InputEvent);
            });
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
                document.execCommand('copy');
            } catch (err) {
                console.error(err)
            }
        }
    }

    const onPaste = (event: MouseEvent) => {
        event.preventDefault()
        const text = event.clipboardData.getData('text');
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
        },
    );

    onMounted(() => {
        applyMask(inputValue.value as string);
    });

    return {
        _ref,
        inputMaskClass,
        inputMaskAttrs,
        onMousedown,
        onMouseup,
        blur,
        focus
    }
}
