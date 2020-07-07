
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/gm-sdk.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    filesize()
  ]
};
