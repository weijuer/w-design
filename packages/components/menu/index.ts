import Menu from './src/menu.vue'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu.vue'
import { withInstall } from '@w-design/utils'

export const WMenu = withInstall(Menu)
export const WMenuItem = withInstall(MenuItem)
export const WMenuItemGroup = withInstall(MenuItemGroup)
export const WSubMenu = withInstall(SubMenu)

export default WMenu
