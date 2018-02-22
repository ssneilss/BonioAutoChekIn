const path = require('path');

const config = {
  entry: {
    index: path.resolve(__dirname, './lambda'),
  },
  target: 'node',
  output: {
    filename: './lambda/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            'stage-0',
          ],
        },
      },
    ],
  },
}

module.exports = config;
