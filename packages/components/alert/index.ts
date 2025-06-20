import Alert from './src/alert.vue'
import { withInstall, type SFCWithInstall } from '@w-design/utils'

export const WAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)

export default WAlert

export * from './src/interface'
