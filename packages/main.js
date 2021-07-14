import WButton from './button'
import WIcon from './icon'

function install(Vue) {
  Vue.component('WButton', WButton)
  Vue.component('WIcon', WIcon)
}

export default {
  install,
  WButton,
  WIcon
}
