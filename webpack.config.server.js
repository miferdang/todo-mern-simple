var path = require('path');
var externalsPlugin = require('webpack2-externals-plugin');

module.exports = {
  entry: './server/server.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'server.js',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /.+\.config.js/],
      loader: 'babel-loader',
    },{
      test: /\.json$/,
      loader: 'json-loader',
    }]
  },
  plugins: [
    new externalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, '/node_modules/'),
    })
  ]
};
