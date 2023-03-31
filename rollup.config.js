import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import banner from 'rollup-plugin-banner';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

import { terser } from 'rollup-plugin-terser';
import '@jswork/next-rollup-banner';

export default {
  input: 'src/main.js',
  output: {
    strict: false,
    file: 'dist/index.js',
    format: 'umd'
  },
  onwarn: function (warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') console.error(warning.message);
  },
  plugins: [
    resolve(),
    commonjs(),
    // terser({ output: { comments: false } }),
    banner(nx.rollupBanner()),
    replace({
      preventAssignment: true,
      __VERSION__: pkg.version
    }),
    filesize()
  ]
};
