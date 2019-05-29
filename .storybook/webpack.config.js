const config = require('../webpack.config');

module.exports = {
  resolve: config.resolve,
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
      }],
    }, {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
};