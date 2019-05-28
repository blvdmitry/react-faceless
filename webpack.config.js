const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const PACKAGES_DIR = path.resolve(__dirname, './node_modules');
const TS_CONFIG_PATH = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  mode: 'production',
  entry: {
    toast: './src/index.ts',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin({ configFile: TS_CONFIG_PATH })],
    modules: [APP_DIR, PACKAGES_DIR],
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:5]',
        }
      }, {
        loader: 'postcss-loader',
      }]
    }],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
