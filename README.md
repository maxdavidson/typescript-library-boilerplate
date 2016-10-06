# typescript-library-boilerplate

[![Build Status](https://img.shields.io/travis/maxdavidson/typescript-library-boilerplate/master.svg)](https://travis-ci.org/maxdavidson/typescript-library-boilerplate)
[![Coverage Status](https://img.shields.io/coveralls/maxdavidson/typescript-library-boilerplate/master.svg)](https://coveralls.io/github/maxdavidson/typescript-library-boilerplate?branch=master)
[![Dependency Status](https://img.shields.io/david/maxdavidson/typescript-library-boilerplate.svg)](https://david-dm.org/maxdavidson/typescript-library-boilerplate)
[![devDependency Status](https://img.shields.io/david/dev/maxdavidson/typescript-library-boilerplate.svg)](https://david-dm.org/maxdavidson/typescript-library-boilerplate?type=dev)

Opinionated boilerplate for TypeScript 2.0 libraries.


## Features

* [TypeScript 2.0](http://www.typescriptlang.org)
* Code quality with [tslint](http://palantir.github.io/tslint/)
* Module bundling with [Rollup](http://rollupjs.org) (finalized as UMD and ES module)
* Unit testing with [AVA](https://github.com/avajs/ava) and [nyc](https://github.com/istanbuljs/nyc)
* Continuous integration with [Travis](https://travis-ci.org)


## Caveats

* External modules will be bundled by default.
  * To prevent this, remove the `nodeResolve` and `commonjs` plugins from `rollup.config.js`.
