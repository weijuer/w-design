import { type App, createVNode, render, ComponentOptions } from 'vue'
import { isFunction, isPromise } from 'src/components/_utils'
import Modal from './modal.vue'

export const ModalSymbol = Symbol('Modal')

export interface ModalResult {}

export class Confirm {
    private _app?: App = undefined

    constructor(app?: App) {
        this._app = app
    }

    public open(modalOpts: ComponentOptions, props?: any): Promise<ModalResult> {
        return new Promise(reslove => {
            // if(!this._app) {
            //     return reject(new Error('_app is undefined'))
            // }

            const container = document.createDocumentFragment()

            const config = {
                ...modalOpts,
                ...props,
                modelValue: true,
                ok(data: any) {
                    document.body.removeChild(container)
                    reslove(this.ok(data))
                },
                cancel(data: any) {
                    reslove(this.cancel(data))
                }
            }

            document.body.appendChild(container)
            const vnode = createVNode(Modal, { ...config })
            render(vnode, container as any)

            // const instance= vnode.component;
            // const {props} = instance
        })
    }

    public ok(data?: any) {
        console.log('ok', data)
    }

    public cancel(data?: any) {
        console.log('cancel', data)
    }
}

export default function confirm(props?: any, config?: any) {
    const container = document.createDocumentFragment()
    const baseConfig = {
        ...props,
        ...config,
        modelValue: true,
        onOk,
        onCancel
    }

    async function onOk() {
        const { onOk: ok } = config
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

    // init
    const vnode = createVNode(Modal, baseConfig)
    render(vnode, container as any)

    function update(config: any) {
        Object.assign(vnode.component!.props, config)
        vnode.component?.update()
    }

    function close() {
        baseConfig.momelValue = false
        update(baseConfig)
    }

    function destroy() {
        if (vnode) {
            render(null, container as any)
            // vnode = null;
        }
    }

    return {
        update,
        close,
        destroy
    }
}

export const info = (opts: any) => {
    const info = new Confirm()
    const config = { ...opts, type: 'info' }
    return info.open(config)
}

export const withInfo = (opts: any) => {
    const info = new Confirm()
    const config = { ...opts, type: 'info' }
    return info.open(config)
}
