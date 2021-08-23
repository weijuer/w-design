// import WButton from './button'
// import WIcon from './icon'
// import WBadge from './badge'

const modules = import.meta.globEager('./*/*.js')

import pkg from '../package.json'

// version
const version = pkg.version

const install = (Vue) => {
  for (const path in modules) {
    const mod = modules[path]?.default
    console.log(path, modules[path])
    Vue.component(mod.name, mod)
  }
  // Vue.component('WButton', WButton)
  // Vue.component('WIcon', WIcon)
  // Vue.component('WBadge', WBadge)
}

export default {
  version,
  install
  // WButton,
  // WIcon,
  // WBadge
}
