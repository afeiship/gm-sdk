
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/gm-sdk.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    filesize()
  ]
};
