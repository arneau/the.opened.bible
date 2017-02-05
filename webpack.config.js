var webpack = require('webpack');

var path = require('path');

var app_path = path.resolve(__dirname, '');
var build_path = path.resolve(__dirname, 'src/client/public');

var config = {
	entry: '/index.jsx',
	output: {
		path: path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js'
	}
};

module.exports = config;