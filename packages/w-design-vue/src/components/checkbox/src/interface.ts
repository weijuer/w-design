import { type PropType, ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export type CheckboxProvide = {
    auto: boolean,
    toggle: (name: Numeric, expanded: boolean) => void;
};

export const CHECKBOX_KEY: InjectionKey<CheckboxProvide> = Symbol('checkbox');

export type Size = 'tiny' | 'small' | 'medium' | 'large'

export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'brand' | 'foucs'

export const checkboxProps = {
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    type: {
        type: String as PropType<Type>,
        dafault: 'default'
    },
    size: String as PropType<Size>,
    checked: {
        type: Boolean,
        default: undefined
    },
    autoFocus: Boolean,
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

export interface Option {
    label: string,
    value: string,
    disabled?: boolean,
    indeterminate?: boolean,
    onChange?: (checked: boolean) => void
}

export const checkboxGroupProps = {
    modelValue: {
        type: [String, Number, Array] as PropType<string[] | Option[]>,
        default: false
    },
    name: String,
    disabled: Boolean,
    options: {
        type: [String, Array] as PropType<string[] | Option[]>,
        dafault: []
    }
}

export const checkboxEmits = ['click', 'change', 'update:modelValue']
export const checkboxGroupEmits = ['click', 'change', 'update:modelValue']

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits