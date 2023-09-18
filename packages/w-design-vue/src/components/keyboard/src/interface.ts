import { PropType, type ExtractPropTypes } from 'vue'

export type KbdKey =
    | "command"
    | "shift"
    | "ctrl"
    | "option"
    | "enter"
    | "delete"
    | "escape"
    | "tab"
    | "capslock"
    | "up"
    | "right"
    | "down"
    | "left"
    | "pageup"
    | "pagedown"
    | "home"
    | "end"
    | "help"
    | "space";

export const keyboardProps = {
    keys: {
        type: [String, Array] as PropType<KbdKey | KbdKey[]>,
        default: ''
    },
    className: {
        type: String,
        default: ''
    }
}

export const keyboardEmits = ['click']

export type KeyboardProps = ExtractPropTypes<typeof keyboardProps>
export type KeyboardEmits = typeof keyboardEmits
