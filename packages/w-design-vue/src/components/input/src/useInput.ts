import { SetupContext, computed, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue'
import { type InputEmits, type InputProps } from './interface'
// import { addUnit } from '../../_utils'

export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {

    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue);
    const _ref = ref<HTMLInputElement>()
    const instance = getCurrentInstance()

    const inputClass = computed(() => {
        const { size, type, bordered, disabled, readonly } = props
        const { slots: { start, end } } = instance!

        return [
            size ? 'w-input__' + size : '',
            type ? 'w-input__' + type : '',
            start ? 'w-input__start' : '',
            end ? 'w-input__end' : '',
            {
                'is-bordered': bordered,
                'is-disabled': disabled,
                'is-readonly': readonly
            }
        ]
    })

    const inputAttrs = computed(() => {
        const { name, disabled, readonly, autofocus, placeholder, autocomplete, autocapitalize, autocorrect } = props

        return {
            ref: _ref,
            name,
            value: inputValue.value,
            disabled,
            readonly,
            autofocus,
            placeholder,
            autocomplete,
            autocapitalize,
            autocorrect,
            onInput
        }
    })

    const updateValue = (value: string) => {
        if (value !== props.modelValue) {
            inputValue.value = value
            emit('update:modelValue', value);
        }
    }

    const onInput = (event: Event) => {
        if (!(event as KeyboardEvent).isComposing) {
            updateValue((event.target as HTMLInputElement).value);
        }
    };

    const blur = () => _ref.value?.blur();
    const focus = () => _ref.value?.focus();

    const onClear = (event: Event) => {
        event.preventDefault()
        inputValue.value = ''
        emit('update:modelValue', '');
        emit('clear', event);
    };



    watch(
        () => props.modelValue,
        (modelValue) => {
            inputValue.value = modelValue
        },
    );

    onMounted(() => {
        nextTick(() => {

        });
    });

    return { _ref, inputClass, inputAttrs, blur, focus, onClear }
}
