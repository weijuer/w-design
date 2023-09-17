import Menu from './src/menu.vue'
import MenuItem from './src/menu-item.vue'
import { withInstall } from '../../utils'

export const WMenu = withInstall(Menu)
export const WMenuItem = withInstall(MenuItem)

WMenu.WMeunItem = WMenuItem;

export default WMenu

