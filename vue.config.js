const path = require('path')
const webpack = require('webpack')
const busConfigure = require('./vendor/freshinup/fresh-bus-forms/.storybook/webpack-configure')
module.exports = {
  chainWebpack: config => {
    config.plugin(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
    config.plugin('VuetifyLoaderPlugin')
    config.resolve.symlinks = true
    config.resolve.alias.set('smartmotors', path.resolve(__dirname, 'resources/js'))
    config.resolve.alias.set('~', path.resolve(__dirname, 'resources/js'))
    config.resolve.alias.set('@freshinup/core-ui/src', path.resolve(__dirname, 'node_modules/@freshinup/core-ui/src'))
    config.resolve.alias.set('sass', path.resolve(__dirname, 'resources/sass'))
    config.resolve.alias.set('stylus', path.resolve(__dirname, 'resources/sass'))
    config.resolve.alias.set('storybook-vue-router', path.resolve(__dirname, 'node_modules/storybook-vue-router'))
    busConfigure(config)
    config.resolve.alias.set('tests', path.resolve(__dirname, 'tests/Javascript'))
    if (process.env.STORYBOOK && process.env.STORYBOOK.trim() === 'true') {
      // eslint-disable-next-line no-console
      console.info('info => Updating webpack using chain-webpack')
      config.module
        .rule('addon-storysource')
        .enforce()
        .pre()
        .test(/\.stories\.jsx?$/)
        .use('@storybook/source-loader')
        .loader('@storybook/source-loader')
        .options({
          semi: false,
          printWidth: 120,
          singleQuote: true
        })
        .end()
    }
  }
}
