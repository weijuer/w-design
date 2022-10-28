import WContainer from './container.vue'

WContainer.install = (Vue) => {
  Vue.component(WContainer.name, WContainer)
}

export default WContainer
