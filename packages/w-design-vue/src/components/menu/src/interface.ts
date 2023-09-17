import { PropType, type ExtractPropTypes } from 'vue'

export type MenuMode = 'vertical' | 'horizontal' | 'vertical-right' | 'inline'
export type MenuTheme = 'light' | 'dark'

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
    modelValue: [String, Array],
    defaultValue: [String, Array],
    disabled: Boolean
}

export const menuItemProps = {
    node: {
        type: [String, Number],
        required: true
    },
    title: {
        type: [String, Object],
        required: true
    },
    icon: {
        type: Object,
        default: null
    },
    expanded: Boolean,
    selected: Boolean,
    checked: Boolean,
    halfChecked: Boolean,
    checkable: Boolean,
    selectable: Boolean,
    disabled: Boolean
}

export const menuEmits = ['click', 'change']
export const menuItemEmits = ['click']

export type MenuProps = ExtractPropTypes<typeof menuProps>
export type MenuEmits = typeof menuEmits
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemEmits = typeof menuItemEmits
