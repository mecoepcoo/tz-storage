import config from './rollup.config'
import {uglify} from 'rollup-plugin-uglify'

config.plugins.push(uglify({
  compress: {
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    warnings: false
  }
}))

config.output.file = 'dist/tz-storage.min.js'
config.output.sourcemap = false

export default config
