import { type ExtractPropTypes } from 'vue'

export const inputSearchProps = {
    enterButton: {
        type: [String, Object]
    },
    loading: Boolean
}

export const inputSearchEmits = ['search']

export type InputSearchProps = ExtractPropTypes<typeof inputSearchProps>
export type InputSearchEmits = typeof inputSearchEmits
