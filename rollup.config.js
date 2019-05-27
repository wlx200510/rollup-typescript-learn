import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  postcss({ extract: false }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  resolve(),
  typescript({module: 'CommonJS'}),
  commonjs({extensions: ['.js', '.ts']})
];

let config = {
  input: 'src/main.ts',
  output: {
    file: 'dist/assets/app.js',
    format: 'iife',
    name: 'app',
    sourcemap: true
  },
  plugins: plugins
};

if (production) {
  config.output.sourcemap = false;
  config.plugins.push(uglify());
}

export default config;
