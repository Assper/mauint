const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/frontend/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist/frontend'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
