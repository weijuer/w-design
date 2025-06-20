import WUploader from './Uploader.vue'

WUploader.install = Vue => {
    Vue.component(WUploader.name, WUploader)
}

export default WUploader
