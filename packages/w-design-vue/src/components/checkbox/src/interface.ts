import { type PropType, ExtractPropTypes, InjectionKey } from 'vue'

export type Numeric = string | number

export const unknownProp = null as unknown as PropType<unknown[]>;

export interface Option {
    label: string,
    value: string,
    disabled?: boolean,
    indeterminate?: boolean,
    onChange?: (checked: boolean) => void
}

export type CheckboxGroupProvide = {
    props: CheckboxGroupProps,
    updateValue: (option: Option) => void;
};

export const CHECKBOXGROUP_KEY: InjectionKey<CheckboxGroupProvide> = Symbol('checkboxGroup');

export type Size = 'small' | 'medium' | 'large'
export type Orientation = 'vertical' | 'horizontal'
export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'brand' | 'foucs'

export const checkboxProps = {
    value: {
        type: [Boolean, String, Number],
        default: false
    },
    type: {
        type: String as PropType<Type>,
        dafault: 'default'
    },
    trueValue: {
        type: [Boolean, String, Number],
        default: true,
    },
    falseValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    modelValue: Boolean,
    size: String as PropType<Size>,
    autoFocus: Boolean,
    defaultChecked: Boolean,
    disabled: Boolean,
    indeterminate: Boolean
}

export const checkboxGroupProps = {
    modelValue: {
        type: unknownProp,
    },
    orientation: {
        type: String as PropType<Orientation>,
        default: 'vertical'
    },
    options: {
        type: [String, Array] as PropType<string[] | Option[]>,
        dafault: []
    },
    name: String,
    disabled: Boolean,
}

export const checkboxEmits = ['click', 'change', 'update:modelValue']
export const checkboxGroupEmits = ['click', 'change', 'update:modelValue']

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits