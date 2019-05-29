module.exports = {
  plugins: {
    'postcss-import': {
      path: ['./src/styles/'],
    },
    'postcss-apply': {},
    'postcss-preset-env': { preserve: false, stage: 0, browsers: 'last 3 versions' },
  },
};
