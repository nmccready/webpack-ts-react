module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'postcss-nested': {},
    'postcss-nested-ancestors': {},
    'postcss-automath': {},
    autoprefixer: {},
    // cssnano: { preset: 'default' },
  },
  sourceMap: true,
};
