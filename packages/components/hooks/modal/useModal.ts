import { createVNode, ref, render } from 'vue'
import Modal from '../../modal'
import { type ModalProps } from 'src/components/modal/src/interface'
import { isFunction, isPromise } from '../../_utils'

export type ModalFuncProps = Omit<ModalProps, 'modelValue'>

export default function useModal(props: ModalFuncProps) {
    const visible = ref(false)
    const container = document.createDocumentFragment()

    let instance: any

    const config = {
        ...props,
        modelValue: visible.value,
        onOk,
        onCancel
    }

    const initModal = () => {
        // init render
        document.body.appendChild(container)
        const vnode = createVNode(Modal, config)
        render(vnode, container as any)

        instance = vnode.component
        return instance
    }

    const update = (config: any) => {
        Object.assign(instance.props, config)
        instance.update()
    }

    async function onOk() {
        const { onOk: ok } = props
        if (!isFunction(ok) || !isPromise(ok)) {
            return close()
        }

        update({ confirmLoading: true })

        return ok
            .then(() => {
                close()
            })
            .finally(() => {
                update({ confirmLoading: false })
            })
    }

    async function onCancel(...arg: any[]) {
        config.onCancel?.(...arg)
        return close()
    }

    const info = () => {
        if (!instance) {
            initModal()
        }
    }

    return { info }
}
