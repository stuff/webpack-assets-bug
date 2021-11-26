const path = require('path');

const common = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

const one = {
  ...common,
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist-1'),
    assetModuleFilename: 'img/[name]-[hash][ext]',
  },
};

const two = {
  ...common,
  output: {
    ...common.output,
    path: path.resolve(__dirname, 'dist-2'),
    assetModuleFilename: 'assets/[name]-[hash][ext]',
  },
};

module.exports = [one, two];
