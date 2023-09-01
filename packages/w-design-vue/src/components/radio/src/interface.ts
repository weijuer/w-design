import { type ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type Numeric = string | number

export const unknownProp = null as unknown as PropType<unknown>;

export interface Option {
    label: string,
    value: string,
    disabled?: boolean
}

export type RadioProvide = {
    props: RadioGroupProps
    updateValue: (value: unknown) => void;
};

export const RADIOGROUP_KEY: InjectionKey<RadioProvide> = Symbol('radioGroup');

export type Size = 'small' | 'medium' | 'large'
export type Orientation = 'vertical' | 'horizontal'
export type Type = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'brand' | 'foucs'

export const radioProps = {
    value: {
        type: [Boolean, String, Number],
        default: false
    },
    type: {
        type: String as PropType<Type>,
        dafault: 'default'
    },
    name: String,
    size: String as PropType<Size>,
    modelValue: Boolean,
    autoFocus: Boolean,
    defaultChecked: Boolean,
    disabled: Boolean
}

export const radioGroupProps = {
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

export const radioEmits = ['click', 'change', 'update:modelValue']
export const radioGroupEmits = ['click', 'change', 'update:modelValue']

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmits = typeof radioGroupEmits