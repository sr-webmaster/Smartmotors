const { name } = require(process.cwd() + '/package.json')
const path = require('path')
const JestConfig = require('vue-cli-plugin-freshinup/utils/testing/jest.config.core')

module.exports = {
  ...JestConfig,
  modulePaths: [path.resolve('node_modules')],
  collectCoverageFrom: JestConfig.collectCoverageFrom.concat([
    'resources/js/**/*.{js,vue}',
    '!**/*.test.js'
  ]),
  coverageThreshold: {
    global: {
      branches: 89,
      functions: 89,
      lines: 89
    },
    'resources/js/pages/admin/financials/index.vue': {
      functions: 33,
      lines: 58
    }
  },
  setupFiles: ['<rootDir>/tests/Javascript/setup.js', '<rootDir>/tests/Javascript/mockDate.js'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/Javascript/setTimezone.js',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/resources/js/$1',
    [`${name}/(.*)$`]: '<rootDir>/resources/js/$1',
    '@freshinup/(.*)$': '<rootDir>/node_modules/@freshinup/$1',
    ...JestConfig.moduleNameMapper
  },
  transform: {
    // '*.resources/.*\\.test\\.js?$': 'babel-jest',
    ...JestConfig.transform
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$|vue-cli-plugin-freshinup/.*\\.js|vue-cli-plugin-freshinup-ui/.*\\.js|@freshinup/.*\\.js|@freshinup/.*\\.vue|@amcharts/.*\\.js))'
  ]
}
