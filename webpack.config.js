
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var webpack = require('webpack'); 

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};


// // How do we tell webpack we want to run in production mode -> modify package.json
// if ('we are building for production') {
//   config.plugins.push(
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production'); 
//       }
//     }), 

//     new webpack.optimize.UglifyJsPlugin(); 
//   )
// }

module.exports = config; 