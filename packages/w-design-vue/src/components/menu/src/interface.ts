import { InjectionKey, PropType, type ExtractPropTypes } from 'vue'
import { Numeric } from 'src/components/_utils'

export type MenuMode = 'vertical' | 'horizontal' | 'vertical-right' | 'inline'
export type MenuTheme = 'light' | 'dark'

export type MenuProvide = {
    props: MenuProps,
    isExpanded: (name: Numeric) => boolean;
    isSelected: (name: Numeric) => boolean;
    select: (name: Numeric) => void;
    toggle: (name: Numeric, expanded: boolean) => void;
};

export const MENU_KEY: InjectionKey<MenuProvide> = Symbol('menu');

export const menuProps = {
    mode: {
        type: String as PropType<MenuMode>,
        validator(value: string) {
            return ['vertical', 'horizontal', 'vertical-right', 'inline'].includes(value)
        },
        default: 'vertical'
    },
    theme: {
        type: String as PropType<MenuTheme>,
        validator(value: string) {
            return ['light', 'dark'].includes(value)
        },
        default: 'light'
    },
    selectedKeys: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    },
    expandedKeys: {
        type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    },
    multiple: Boolean,
    accordion: Boolean,
    disabled: Boolean
}

export const menuItemProps = {
    value: {
        type: [String, Number] as PropType<Numeric>,
        default: ''
    },
    label: String,
    icon: String,
    expanded: Boolean,
    selected: Boolean,
    checked: Boolean,
    halfChecked: Boolean,
    checkable: Boolean,
    selectable: Boolean,
    disabled: Boolean
}

export const menuItemGroupProps = {
    label: String,
    disabled: Boolean
}

export const menuEmits = ['update:selectedKeys', 'update:expandedKeys', 'open', 'close', 'select']
export const menuItemEmits = ['click']

export type MenuProps = ExtractPropTypes<typeof menuProps>
export type MenuEmits = typeof menuEmits
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemEmits = typeof menuItemEmits
