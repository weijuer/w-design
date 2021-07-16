import WBadge from './badge.vue'

WBadge.install = (Vue) => {
  Vue.component(WBadge.name, WBadge)
}

export default WBadge
