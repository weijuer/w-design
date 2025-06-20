export type NodeEnv = 'production' | 'development' | 'test'

export function setNodeEnv(value: NodeEnv) {
    process.env.NODE_ENV = value
}
