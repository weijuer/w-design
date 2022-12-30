import Grid from './src/grid.vue'
import GridItem from './src/gridItem.vue'
import { withInstall } from '../../utils'

export const WGrid = withInstall(Grid)
export const WGridItem = withInstall(GridItem)

WGrid.WItem = WGridItem

export default WGrid