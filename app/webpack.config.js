var config = {
	entry: './app.jsx',
	output: {
		path: '../',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /node_modules/,
				test: /\.jsx?/,
			}
		]
	}
};

module.exports = config;