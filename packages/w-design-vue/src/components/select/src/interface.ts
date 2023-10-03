import { PropType, type ExtractPropTypes, InjectionKey } from 'vue'
import { type Size, Type, Numeric } from '../../_utils'

export enum SelectItemType {
    NEXT = 'next',
    PREV = 'prev',
    DOT = 'dot',
}

export type SelectItem = {
    type: string,
    text: Numeric,
    number: number,
    active?: boolean
}

export interface Option {
    label: Numeric,
    value: Numeric,
    selected?: boolean,
    disabled?: boolean
}

export interface Options {
    label: Numeric,
    options: Option[]
}

export type SelectProvide = {
    props: SelectProps,
    updateValue: (option: Numeric) => void;
};

export const SELECT_KEY: InjectionKey<SelectProvide> = Symbol('select');

export const isNumbericArray = (options: Numeric[] | Option[] | Options[]): options is Numeric[] => {
    return (<Numeric[]>options).some(option => typeof option === 'string' || typeof option === 'number');
}

export const isOptionArray = (options: Numeric[] | Option[] | Options[]): options is Option[] => {
    return (<Option[]>options).some(({ label, value }) => !!label && !!value);
}

export const isOptionGroupArray = (options: Numeric[] | Option[] | Options[]): options is Options[] => {
    return (<Options[]>options).some(({ options }) => options !== undefined);
}

export type SelectionMode = 'single' | 'multiple'

export const selectProps = {
    mode: {
        type: String as PropType<SelectionMode>,
        default: 'single'
    },
    modelValue: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
        default: ''
    },
    selectedKeys: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    },
    defaultSelectedKeys: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
        default: ''
    },
    disabledKeys: {
        type: [String, Array] as PropType<string[]>
    },
    type: {
        type: String as PropType<Type>,
    },
    size: {
        type: String as PropType<Size>,
    },
    options: {
        type: [String, Number, Array] as PropType<Numeric[] | Option[] | Options[]>,
        dafault: []
    },
    name: String,
    label: String,
    placeholder: String,
    className: String,
    multiple: Boolean,
    borderd: Boolean,
    disabled: Boolean,
    loading: Boolean,
    closable: Boolean,
}

export const selectOptionProps = {
    value: [String, Number] as PropType<Numeric>,
    label: String,
    selected: Boolean,
    disabled: Boolean
}

export const selectOptionGroupProps = {
    label: [String, Number] as PropType<Numeric>,
    value: String as PropType<Numeric>,
}

export const selectEmits = ['update:modelValue', 'change']
export const selectOptionEmits = ['select']

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits
export type SelectOptionProps = ExtractPropTypes<typeof selectOptionProps>
export type SelectOptionEmits = typeof selectOptionEmits
export type SelectOptionGroupProps = ExtractPropTypes<typeof selectOptionGroupProps>
