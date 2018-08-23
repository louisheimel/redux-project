const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "inline-source-map",
  devServer: {
    "contentBase": "./dist"
  },
	module: {
		rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        options: {
          presets: ['es2015']
        }
      }
		]
	},
  mode: "development"
};
