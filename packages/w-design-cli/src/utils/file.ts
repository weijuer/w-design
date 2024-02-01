import { readFile, writeFile } from 'node:fs/promises'
import { log } from './log'

export const getValueByKey = (file: string, key: string) => {
    readFile(file, 'utf8')
        .then(data => {
            console.log('file content', data)
            const [_, value] = data.match(key + '=(.*)\n?') || []

            if (!value) {
                console.error(`无法读取配置键值为"${key}"的值`)
            }

            log('The value of "%s" is: %s', key, value)

            return value
        })
        .catch(err => {
            console.error(`无法读取配置文件 ${file}: ${err.message}`)
            process.exit(1)
        })
}

export const setValue = (file: string, key: string, value: string) => {
    readFile(file, 'utf8')
        .then(data => {
            // 将配置文件内容按行分割
            const lines = data.split('\n')

            // 查找要修改的键
            let keyFound = false
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i]
                if (line.startsWith(`${key}=`)) {
                    // 修改键值对
                    lines[i] = `${key}=${value}`
                    keyFound = true
                    break
                }
            }

            // 如果键不存在，则添加新的键值对
            if (!keyFound) {
                lines.push(`${key}=${value}`)
            }

            // 将修改后的内容写回配置文件
            const modifiedContent = lines.join('\n')

            writeFile(file, modifiedContent, 'utf8')
                .then(() => {
                    console.log(`配置文件 ${file} 中的 ${key} 已修改为 ${value}`)
                })
                .catch(err => {
                    console.error(`无法写入配置文件 ${file}: ${err.message}`)
                    process.exit(1)
                })
        })
        .catch(err => {
            console.error(`无法读取配置文件 ${file}: ${err.message}`)
            process.exit(1)
        })
}
