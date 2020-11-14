const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'demo/index.js',
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      // filename: 'index.html'
    }
  },
  css: { extract: false },
  publicPath: './',
  outputDir: path.resolve(__dirname, './dist'),
  configureWebpack: {
    output: {
      filename: '[name].js',
      library: 'webgl-fluid',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    devtool: 'source-map',
  },
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.optimization.delete('splitChunks')
  }
}
