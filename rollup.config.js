
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import banner from 'rollup-plugin-banner';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

import { terser } from "rollup-plugin-terser";
import '@feizheng/next-rollup-banner';

export default {
  input: 'src/main.js',
  output: {
    strict: false,
    file: 'dist/gm-sdk.js',
    format: 'umd',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser({ output: { comments: false } }),
    banner(nx.rollupBanner()),
    replace({
      '__VERSION__': pkg.version
    }),
    filesize()
  ]
};
