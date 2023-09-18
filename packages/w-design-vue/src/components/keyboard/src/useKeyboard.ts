import { SetupContext, computed } from 'vue'
import { type KeyboardProps, KeyboardEmits } from './interface'

const keysDict: Record<string, string> = {
    "command": "⌘",
    "shift": "⇧",
    "control": "⌃",
    "option": "⌥",
    "enter": "↵",
    "delete": "⌫",
    "escape": "⎋",
    "tab": "⇥",
    "up": "↑",
    "right": "→",
    "down": "↓",
    "left": "←",
    "home": "↖",
    "end": "↘",
    "help": "?",
    "space": "␣"
}

export const useKeyboard = (props: KeyboardProps, emit: SetupContext<KeyboardEmits>['emit']) => {

    const keyboardClass = computed(() => {
        const { className } = props

        return [
            className,
        ]
    })

    const keyboardKeys = computed(() => {
        const { keys } = props

        if (Array.isArray(keys)) {
            return keys.map(key => ({ label: key, value: keysDict[key] }))
        } else {
            return [{ label: keys, value: keysDict[keys] }]
        }
    })

    const onClick = () => {
        emit('click')
    }

    return {
        keyboardClass,
        keyboardKeys,
        onClick
    }
}
