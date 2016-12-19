import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	title: 'ChingChingTest',
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: path.resolve(__dirname, 'src/index.js'),
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('css/main.css', {
			allChunks: true
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /(\.jsx?$|\.js$)/,
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
			{
				test: /(\.sass$|\.scss$)/,
				loader: ExtractTextPlugin.extract(
					'style', // The backup style loader
					'css?sourceMap!resolve-url!sass?sourceMap&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')	+ '&includePaths[]=' + path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets/') + '&includePaths[]=./sass',
					{ publicPath: '../'}
				)
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?\S*)?$/i,
				loader: 'file-loader?name=fonts/[name].[ext]&context=' + path.resolve(__dirname, './src')
			},
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				loaders: [
					'file-loader?name=[path][name].[ext]&context=' + path.resolve(__dirname, './src'),
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.(json)$/i,
				loaders: [
					'file-loader?name=[path][name].[ext]&context=' + path.resolve(__dirname, './src')
				]
			},
			{
				test: /\.(pdf)$/i,
				loaders: [
					'file-loader?name=docs/[name].[ext]&context=' + path.resolve(__dirname, './src/json/docs')
				]
			}
		]
	}
};
