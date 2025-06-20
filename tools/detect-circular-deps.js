// tools/detect-circular-deps.js
const madge = require('madge')
const path = require('path')

async function detectCircularDependencies() {
    const packagesDir = path.join(process.cwd(), 'packages')

    try {
        const res = await madge(packagesDir, {
            fileExtensions: ['ts', 'tsx', 'js', 'jsx'],
            tsConfig: 'tsconfig.json'
        })

        const circular = res.circular()

        if (circular.length > 0) {
            console.log('🔄 Circular dependencies detected:')
            circular.forEach((cycle, index) => {
                console.log(`${index + 1}. ${cycle.join(' → ')}`)
            })
            process.exit(1)
        } else {
            console.log('✅ No circular dependencies found')
        }
    } catch (error) {
        console.error('Error analyzing dependencies:', error)
        process.exit(1)
    }
}

detectCircularDependencies()
