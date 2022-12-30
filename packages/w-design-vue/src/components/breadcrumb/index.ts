import Breadcrumb from './src/Breadcrumb.vue'
import BreadcrumbItem from './src/BreadcrumbItem.vue'
import { withInstall } from '../../utils'

export const WBreadcrumb = withInstall(Breadcrumb)
export const WBreadcrumbItem = withInstall(BreadcrumbItem)

WBreadcrumb.WBreadcrumbItem = WBreadcrumbItem;

export default WBreadcrumb;
