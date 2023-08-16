import { type ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type CheckboxProvide = {
    auto: Boolean,
    toggle: (name: Numeric, expanded: boolean) => void;
};

export const CHECKBOX_KEY: InjectionKey<CheckboxProvide> = Symbol('checkbox');

export const checkboxProps = {
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
    disabled: Boolean,
    trueValue: {
        type: [Boolean, String, Number],
        default: true,
    },
    falseValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    indeterminate: Boolean
}

export const checkboxEmits = ['click', 'change', 'update:modelValue']

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits