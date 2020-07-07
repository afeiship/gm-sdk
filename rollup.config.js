
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import banner from 'rollup-plugin-banner'



export default {
  input: 'src/main.js',
  output: {
    strict: false,
    file: 'dist/gm-sdk.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    banner('gm-sdk v<%= pkg.version %> by <%= pkg.author.name %>'),
    filesize()
  ]
};
