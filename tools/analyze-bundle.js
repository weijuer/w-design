const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')

class BundleAnalyzer {
    constructor() {
        this.packages = this.getPackages()
    }

    getPackages() {
        const packagesDir = path.join(process.cwd(), 'packages')
        return fs.readdirSync(packagesDir).filter(name => {
            const pkgPath = path.join(packagesDir, name, 'package.json')
            return fs.existsSync(pkgPath)
        })
    }

    analyzeBundleSizes() {
        console.log('📦 Bundle Size Analysis\n')

        this.packages.forEach(pkg => {
            const distPath = path.join(process.cwd(), 'packages', pkg, 'dist')

            if (fs.existsSync(distPath)) {
                const files = fs.readdirSync(distPath)
                let totalSize = 0

                console.log(`\n📋 @w-design/${pkg}:`)

                files.forEach(file => {
                    const filePath = path.join(distPath, file)
                    const stats = fs.statSync(filePath)
                    const sizeKB = (stats.size / 1024).toFixed(2)
                    totalSize += stats.size

                    console.log(`  ${file}: ${sizeKB}KB`)
                })

                const totalKB = (totalSize / 1024).toFixed(2)
                console.log(`  Total: ${totalKB}KB`)

                // Warn if bundle is too large
                if (totalSize > 100 * 1024) {
                    // 100KB
                    console.log(`  ⚠️  Large bundle detected!`)
                }
            }
        })
    }

    checkTreeShaking() {
        console.log('\n🌳 Tree Shaking Analysis\n')

        this.packages.forEach(pkg => {
            const pkgPath = path.join(process.cwd(), 'packages', pkg)
            const distPath = path.join(pkgPath, 'dist')

            if (fs.existsSync(distPath)) {
                // Check if ES modules are available
                const esmFile = path.join(distPath, 'index.esm.js')
                const cjsFile = path.join(distPath, 'index.js')

                console.log(`📦 @w-design/${pkg}:`)
                console.log(`  ESM: ${fs.existsSync(esmFile) ? '✅' : '❌'}`)
                console.log(`  CJS: ${fs.existsSync(cjsFile) ? '✅' : '❌'}`)

                // Check for sideEffects field
                const pkgJsonPath = path.join(pkgPath, 'package.json')
                const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'))

                if (pkgJson.sideEffects === false) {
                    console.log(`  Side Effects: ✅ None`)
                } else if (Array.isArray(pkgJson.sideEffects)) {
                    console.log(`  Side Effects: ⚠️  ${pkgJson.sideEffects.length} files`)
                } else {
                    console.log(`  Side Effects: ❌ Not specified`)
                }
            }
        })
    }
}

const analyzer = new BundleAnalyzer()
analyzer.analyzeBundleSizes()
analyzer.checkTreeShaking()
