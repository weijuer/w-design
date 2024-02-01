import chalk from 'chalk'

const getTime = () => {
    const now = new Date()
}

// 2024-01-31 10:46:57.080 [info] > git fetch
export const log = console.log.bind(null, chalk.green('[WD]'))
