import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import {eslint} from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import {uglify} from 'rollup-plugin-uglify'

const env = process.env.NODE_ENV
const version = require('../package.json').version

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/tz-local-storage.js',
    format: 'umd',
    name: 'storage',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs(),
    nodeResolve(),
    eslint(),
    babel(),
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ],
  banner: 
`/**
 * tz-storage v${version}
 * (c) ${new Date().getFullYear()} Tianzhen Mecoepcoo@vip.qq.com
 * @license MIT
 */`
}