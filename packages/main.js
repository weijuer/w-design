import WButton from './button'
import WIcon from './icon'
import WBadge from './badge'

function install(Vue) {
  Vue.component('WButton', WButton)
  Vue.component('WIcon', WIcon)
  Vue.component('WBadge', WBadge)
}

export default {
  install,
  WButton,
  WIcon,
  WBadge
}
