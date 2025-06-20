import { type ExtractPropTypes } from 'vue'

export const inputPasswordProps = {
    icon: {
        type: Object
    },
    visibilityToggle: Boolean
}

export type InputPasswordProps = ExtractPropTypes<typeof inputPasswordProps>
