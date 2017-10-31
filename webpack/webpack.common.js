const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		shapes: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env',
							'react'
						]
					}
				}
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':data-src']
					}
				}
			},
			{
	            test: /\.css$/,
	            exclude: /node_modules/,
	            use: [
	                {
	                    loader: 'style-loader',
	                },
	                {
	                    loader: 'css-loader',
	                    options: {
	                        importLoaders: 1,
	                    }
	                },
	                {
	                    loader: 'postcss-loader'
	                }
	            ]
			}
	    ]
  	},
   	plugins: [new HtmlWebpackPlugin({
   		template: './src/index.html'
   	})]
}