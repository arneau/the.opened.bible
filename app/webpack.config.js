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
			},
			{
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				exclude: /node_modules/,
				test: /\.scss$/,
			}
		]
	}
};

module.exports = config;