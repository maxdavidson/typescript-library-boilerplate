# typescript-library-boilerplate

[![Build Status](https://img.shields.io/travis/maxdavidson/typescript-library-boilerplate/master.svg)](https://travis-ci.org/maxdavidson/typescript-library-boilerplate)
[![Coverage Status](https://img.shields.io/coveralls/maxdavidson/typescript-library-boilerplate/master.svg)](https://coveralls.io/github/maxdavidson/typescript-library-boilerplate?branch=master)
[![Dependency Status](https://img.shields.io/david/maxdavidson/typescript-library-boilerplate.svg)](https://david-dm.org/maxdavidson/typescript-library-boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/maxdavidson/typescript-library-boilerplate.svg)](https://david-dm.org/maxdavidson/typescript-library-boilerplate?type=dev)

Opinionated boilerplate for TypeScript 2.0 libraries.


## Features

* [TypeScript 2.0](http://www.typescriptlang.org) (ES2015 mode)
* Code quality with [tslint](http://palantir.github.io/tslint/)
* ES2015 -> ES5 transpilation with [Babel](https://github.com/babel/babel) (loose mode)
* Module bundling with [Rollup](http://rollupjs.org) (finalized as UMD and ES module)
* Unit testing with [AVA](https://github.com/avajs/ava) and [nyc](https://github.com/istanbuljs/nyc)
* Continuous integration with [Travis](https://travis-ci.org)


## Caveats

* External modules will be bundled by default.
  * To prevent this, remove the `nodeResolve` and `commonjs` plugins from `rollup.config.js`.
* Polyfills are not included (needed for
  [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
  [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol),
  [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign),
  [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values),
  [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries),
  [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map),
  [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap),
  [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set),
  [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet),
  [`Array.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), etc.).
* [Regenerator](https://github.com/facebook/regenerator) runtime is not included (needed for generators).
