import Tabs from './src/tabs.vue'
import Tab from './src/tab.vue'
import { withInstall } from '@w-design/utils'

export const WTabs = withInstall(Tabs)
export const WTab = withInstall(Tab)

export default WTabs

export * from './src/tabs.vue'
export * from './src/tab.vue'
