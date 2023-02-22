import * as components from './components'
import { installer } from './utils'

const plugins = Object.keys(components).map((key) => components[key as keyof typeof components])

export * from './components'
export default installer(plugins)