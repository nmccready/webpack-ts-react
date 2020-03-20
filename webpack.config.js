import path from 'path';

import webpack from 'webpack';

export default {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    }),
  ],
  externals: ['react'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /^((?!\.module).)*p?css$/,
        use: [
          'style-loader',
          // 'css-loader', // un-comment and webpack loses it's mind
          'postcss-loader', // comment out when you use css-loader instead
        ],
      },
      {
        test: /\.module.css$/,
        use: [
          'style-loader',
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner: `// autogenerated by typings-for-css-modules-loader.
      // Please do not change this file!`,
              // modules: true,
            },
          },
          {
            loader: 'css-loader', // any *module.css imported explodes webpack
            options: { modules: true },
          },
          // 'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: ['url-loader'],
      },
      {
        loader: 'ts-loader',
        test: /\.m?(j|t)sx?$/,
      },
    ],
  },
};
