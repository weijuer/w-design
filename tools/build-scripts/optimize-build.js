const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

class BuildOptimizer {
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot
        this.packagesDir = path.join(workspaceRoot, 'packages')
    }

    // Get list of changed packages since last commit
    getChangedPackages() {
        try {
            const changedFiles = execSync('git diff --name-only HEAD~1', {
                encoding: 'utf8'
            }).split('\n')

            const changedPackages = new Set()

            changedFiles.forEach(file => {
                const match = file.match(/^packages\/([^\/]+)\//)
                if (match) {
                    changedPackages.add(match[1])
                }
            })

            return Array.from(changedPackages)
        } catch (error) {
            console.log('Unable to detect changes, building all packages')
            return this.getAllPackages()
        }
    }

    // Get all packages in the workspace
    getAllPackages() {
        return fs
            .readdirSync(this.packagesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
    }

    // Build only changed packages and their dependents
    buildChanged() {
        const changedPackages = this.getChangedPackages()

        if (changedPackages.length === 0) {
            console.log('No package changes detected')
            return
        }

        console.log('Building changed packages:', changedPackages.join(', '))

        // Build changed packages
        changedPackages.forEach(pkg => {
            console.log(`Building @w-design/${pkg}...`)
            execSync(`pnpm --filter @w-design/${pkg} run build`, {
                stdio: 'inherit'
            })
        })

        // Build packages that depend on changed packages
        this.buildDependents(changedPackages)
    }

    // Build packages that depend on the changed packages
    buildDependents(changedPackages) {
        const allPackages = this.getAllPackages()
        const dependents = new Set()

        allPackages.forEach(pkg => {
            const pkgJsonPath = path.join(this.packagesDir, pkg, 'package.json')

            if (fs.existsSync(pkgJsonPath)) {
                const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'))
                const deps = {
                    ...pkgJson.dependencies,
                    ...pkgJson.devDependencies
                }

                changedPackages.forEach(changedPkg => {
                    if (deps[`@w-design/${changedPkg}`]) {
                        dependents.add(pkg)
                    }
                })
            }
        })

        if (dependents.size > 0) {
            console.log('Building dependent packages:', Array.from(dependents).join(', '))
            dependents.forEach(pkg => {
                execSync(`pnpm --filter @w-design/${pkg} run build`, {
                    stdio: 'inherit'
                })
            })
        }
    }
}

// Usage
const optimizer = new BuildOptimizer(process.cwd())
optimizer.buildChanged()
