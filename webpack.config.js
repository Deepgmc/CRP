const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

const config = {
    devServer: {
        static: './public',
        hot: true,
    },
    mode: 'development',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: ['vue-loader']
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ['style-loader']
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),

        //new HtmlWebpackPlugin({template: 'public/index.html'}),

        new VueLoaderPlugin()
    ]
}

module.exports = config