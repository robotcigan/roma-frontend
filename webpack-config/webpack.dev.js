const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const path = require('path');
const _root = path.resolve(__dirname, '..');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}
const helpers = {
  root: root
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('static'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: {
      rewrites: [
        {from: /^\/app/, to: '/index.html'},
        {from: /^\/admin/, to: '/index-admin.html'}
      ]
    },
    port: 3000,
    inline: true,
    stats: 'minimal'
  }
});
