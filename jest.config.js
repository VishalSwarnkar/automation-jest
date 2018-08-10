'use strict';

module.exports = {
  'verbose': true,
  'globalSetup': './tests/setup.js',
  'globalTeardown': './tests/teardown.js',
  'testEnvironment': './CustomEnvironment.js',
  'setupTestFrameworkScriptFile': './jest.setup.js',
  'testMatch': [ '**/?(*.)test.js?(x)' ],
  'reporters': ['default', 'jest-junit', ['jest-junit', {'configValue': true, 'output': 'junit.xml'}]]
};
