import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group.vue'
import { withInstall } from '@w-design/utils'

export const WAvatar = withInstall(Avatar)
export const WAvatarGroup = withInstall(AvatarGroup)

WAvatarGroup.WAvatar = WAvatar;

export default WAvatar

