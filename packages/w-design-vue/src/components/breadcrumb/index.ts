import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'
import { withInstall } from '@w-design/utils'

export const WBreadcrumb = withInstall(Breadcrumb)
export const WBreadcrumbItem = withInstall(BreadcrumbItem)

WBreadcrumb.WBreadcrumbItem = WBreadcrumbItem;

export default WBreadcrumb;
