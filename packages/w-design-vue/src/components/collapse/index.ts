import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'
import { withInstall } from '../../utils'

export const WCollapse = withInstall(Collapse)
export const WCollapseItem = withInstall(CollapseItem)

WCollapse.WBreadcrumbItem = WCollapseItem;

export default WCollapse

