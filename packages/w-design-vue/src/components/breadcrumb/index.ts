import Breadcrumb from './src/breadcrumb.vue'
import { withInstall } from '@w-design/utils'

export { breadcrumbProps } from './src/interface'

withInstall(Breadcrumb)

export const _BreadcrumbComponent = Breadcrumb

export default Breadcrumb
