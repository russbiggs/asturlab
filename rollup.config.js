import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript()
  ],
  output: [{
    file: 'dist/asturlab-iife.js',
    format: 'iife',
    name: 'qiblah'
  }, {
    file: 'dist/asturlab-cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/asturlab.mjs',
    format: 'es'
  }, {
    file: 'dist/asturlab-amd.js',
    format: 'amd',
  }]
};