// https://webpack.js.org/
// https://nodejs.org/en/docs/

const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const CSSExtract = new MiniCssExtractPlugin({
        filename:'styles.css',
        ignoreOrder: false
    });
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js|jsx$/,
                exclude: /node_modules/
            } , {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};
