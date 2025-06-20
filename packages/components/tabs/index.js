import Tabs from './Tabs.vue'
import TabPane from './TabPane.vue'

Tabs.TabPane = TabPane

Tabs.install = Vue => {
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)
}

export default Tabs
