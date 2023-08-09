import { type ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type RadioProvide = {
    auto: Boolean,
    toggle: (name: Numeric, expanded: boolean) => void;
};

export const CHECKBOX_KEY: InjectionKey<RadioProvide> = Symbol('radio');

export const radioProps = {
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    autoFocus: Boolean,
    checked: {
        type: Boolean,
        default: undefined
    },
    defaultChecked: Boolean,
    disabled: Boolean
}

export const radioEmits = ['click', 'change', 'update:modelValue']

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits