import { App } from 'vue'
import { WButton } from './components'

// 导出所有组件，用于按需导入
export * from './components'

// 导出 Vue 插件
export default {
    install: (app: App) => {
        app.component('WButton', WButton)
    }
}
