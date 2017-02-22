module.exports = {
  entry: __dirname + '/lib/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.scss$/, loader: "style!css!sass" },
    ]
  }
}
