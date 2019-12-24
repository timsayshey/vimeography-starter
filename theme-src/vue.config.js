const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../dist'),
  assetsDir: '../dist',
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/wp-content/plugins/vimeography-starter/dist/'
      : '/',

  filenameHashing: false,
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.optimization.minimize(false)
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: '[name].[ext]' }))
  },
  configureWebpack: {
    output: {
      filename: 'index.js',
      chunkFilename: 'index.js'
    },
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  }
}
