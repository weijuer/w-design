import pkg from '../package.json'

// version
const version = pkg.version

// _modules
const getAllModules = () => {
  const modules = import.meta.globEager('./*/*.js')
  const _modules = {}
  Object.keys(modules).forEach((key) => {
    const fileName = key.split('/')[1]
    const name = `W${fileName.substring(0, 1).toUpperCase() + fileName.substring(1)}`
    _modules[name] = modules[key]?.default
  })
  return _modules
}

const modules = getAllModules()

// install
const install = (Vue) => {
  Object.entries(modules).map(([name, mod]) => {
    Vue.component(name, mod)
  })
}

export { version, install }

export default {
  ...modules,
  version,
  install
}
