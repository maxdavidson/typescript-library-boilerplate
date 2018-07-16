const semver = require('semver');

function getTsConfigFile() {
  const nodeVersion = process.versions.node;

  if (semver.gt(nodeVersion, '7.6.0')) {
    return 'tsconfig.jest.json';
  } else {
    return 'tsconfig.jest-compat.json';
  }
}

module.exports = {
  transform: {
    '.(tsx?)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testMatch: [
    '**/__tests__/**/*.{t,j}s?(x)',
    '**/?(*.)(spec|test).{t,j}s?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(node_modules|lib|es|dist)'
  ],
  collectCoverageFrom: [
    'src/**/*.{t,j}s?(x)',
    '!src/**/*.d.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      skipBabel: true,
      tsConfigFile: getTsConfigFile()
    }
  }
};
