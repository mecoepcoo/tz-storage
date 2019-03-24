import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import {eslint} from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const env = process.env.NODE_ENV
const version = require('../package.json').version

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/tz-storage.js',
    format: 'umd',
    name: 'storage',
    sourcemap: true,
    banner: 
`/**
 * tz-storage v${version}
 * (c) ${new Date().getFullYear()} Tianzhen mecoepcoo@vip.qq.com
 * @license MIT
 */`
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs(),
    nodeResolve(),
    eslint(),
    babel(),
  ],
}