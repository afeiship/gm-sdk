import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { loadJsonFileSync } from 'load-json-file'
import rollupBanner from '@jswork/rollup-banner';

const pkg = loadJsonFileSync('./package.json');

export default {
  input: 'src/main.js',
  output: {
    strict: false,
    file: 'dist/index.js',
    format: 'umd',
    banner: rollupBanner()
  },
  onwarn: function(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') console.error(warning.message);
  },
  plugins: [
    resolve(),
    commonjs(),
    // terser({ output: { comments: false } }),
    // banner(nx.rollupBanner()),
    replace({
      preventAssignment: true,
      __VERSION__: pkg.version
    }),
    filesize()
  ]
};
