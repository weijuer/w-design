import type { INSTALLED_KEY } from '@w-design/constants'

declare global {
    const process: {
        env: {
            NODE_ENV: string
        }
    }

    namespace JSX {
        interface IntrinsicAttributes {
            class?: any
            style?: any
        }
    }
}

declare module 'vue' {
    export interface App {
        [INSTALLED_KEY]?: boolean
    }

    export interface GlobalComponents {
        Component: (props: { is: Component | string }) => void
    }
}

export {}
