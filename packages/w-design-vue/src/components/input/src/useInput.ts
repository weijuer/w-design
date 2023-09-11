import { SetupContext, computed, getCurrentInstance, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { type InputEmits, type InputProps } from './interface'
// import { addUnit } from '../../_utils'

export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {

    const _ref = ref<HTMLInputElement>()

    const instance = getCurrentInstance()
    const inputValue = ref(props.defaultValue ? props.defaultValue : props.modelValue);
    const state = reactive({
        inputValidityState: props.validityState ? props.validityState : 'valid'
    });

    const inputClass = computed(() => {
        const { size, theme, bordered, required, disabled, readonly } = props
        const { slots: { start, end } } = instance!

        return [
            size ? 'w-input__' + size : '',
            theme ? 'w-input__' + theme : '',
            start ? 'w-input__start' : '',
            end ? 'w-input__end' : '',
            {
                'is-bordered': bordered,
                'is-required': required,
                'is-disabled': disabled,
                'is-readonly': readonly,
                'is-invalid': state.inputValidityState === 'invalid',
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

    const isClearBtn = computed(() => {
        const { clearable } = props
        return clearable && !!inputValue.value
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
        if (isClearBtn.value) {
            inputValue.value = ''
            emit('update:modelValue', '');
            emit('clear', event);
        }
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

    return { _ref, inputClass, inputAttrs, isClearBtn, blur, focus, onClear }
}
