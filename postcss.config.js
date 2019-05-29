module.exports = {
  plugins: {
    'postcss-import': {
      path: ['./src/styles/'],
    },
    'postcss-apply': {},
    'postcss-preset-env': { preserve: false, browsers: 'last 3 versions' },
  },
};
