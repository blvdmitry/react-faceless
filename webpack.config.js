const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const PACKAGES_DIR = path.resolve(__dirname, './node_modules');
const TS_CONFIG_PATH = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: {
    index: path.resolve(APP_DIR, 'index.ts'),
    Toast: path.resolve(APP_DIR, 'components/Toast/index.ts'),
    Overlay: path.resolve(APP_DIR, 'components/Overlay/index.ts'),
    Dialog: path.resolve(APP_DIR, 'components/Dialog/index.ts'),
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: chunkData => (chunkData.chunk.name === 'index' ? '[name].js' : 'components/[name]/index.js'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => (name === 'index' ? '[name].css' : 'components/[name]/[name].css'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin({ configFile: TS_CONFIG_PATH })],
    modules: [APP_DIR, PACKAGES_DIR],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:5]',
          importLoaders: 1,
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
