import Grid from './src/grid.vue'
import GridItem from './src/grid-item.vue'
import { withInstall } from '@w-design/utils'

export const WGrid = withInstall(Grid)
export const WGridItem = withInstall(GridItem)

WGrid.WItem = WGridItem

export default WGrid