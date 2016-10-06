import { paramCase, pascalCase } from 'change-case';
import { readFileSync, appendFileSync } from 'fs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const moduleId = paramCase(pkg.name);
const moduleName = pascalCase(pkg.name);

appendFileSync('./es2015/index.d.ts', `export as namespace ${moduleName};\n`);

export default {
  entry: 'es2015/index.js',
  sourceMap: (process.env.NODE_ENV === 'test') ? 'inline' : true,
  moduleId,
  moduleName,
  plugins: [
    nodeResolve({
      main: true,
      module: true,
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    sourcemaps({
      exclude: 'src/**'
    })
  ],
  targets: [
    { dest: `dist/${moduleId}.js`, format: 'umd' },
    { dest: `dist/${moduleId}.mjs`, format: 'es' },
  ],
};
