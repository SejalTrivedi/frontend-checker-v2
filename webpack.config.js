const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/App.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
  },
};
