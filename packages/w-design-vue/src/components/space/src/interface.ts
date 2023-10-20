import { type PropType, type ExtractPropTypes } from 'vue'

export type Numeric = string | number

export type Size = 'small' | 'medium' | 'large'

export type Orientation = 'vertical' | 'horizontal'

export type Align = 'start' | 'end' | 'center' | 'baseline'

export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

export const spaceProps = {
    orientation: {
        type: String as PropType<Orientation>,
        default: 'horizontal'
    },
    size: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    align: String as PropType<Align>,
    justify: String as PropType<Justify>,
    wrap: Boolean,
    fill: Boolean
}

export type SpaceProps = ExtractPropTypes<typeof spaceProps>
