#!/usr/bin/env node
var semver = require('semver');

function getSupportedTypescriptTarget() {
  var nodeVersion = process.versions.node;

  if (semver.gt(nodeVersion, '7.6.0')) {
    return 'es2017'
  } else if (semver.gt(nodeVersion, '7.0.0')) {
    return 'es2016';
  } else if (semver.gt(nodeVersion, '6.0.0')) {
    return 'es2015';
  } else if (semver.gt(nodeVersion, '4.0.0')) {
    return 'es5';
  } else {
    return 'es3';
  }
}

var jestConfig = {
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testResultsProcessor: "<rootDir>/node_modules/ts-jest/coverageprocessor.js",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](dist|coverage|node_modules)[/\\\\]",
    "_\\w*.\\w+$"
  ],
  moduleFileExtensions: ["ts", "tsx", "js"],
  globals: {
    __TS_CONFIG__: {
      target: getSupportedTypescriptTarget(),
      inlineSourceMap: true
    }
  }
};

module.exports = jestConfig;

// If this file is run as an executable, print the config stringified to JSON
if (require.main === module) {
  console.log(JSON.stringify(jestConfig));
}
