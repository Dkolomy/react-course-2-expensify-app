// https://webpack.js.org/
// https://nodejs.org/en/docs/

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'} );
}
else if(process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'} );
}

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const CSSExtract = new MiniCssExtractPlugin({
        filename:'styles.css',
        ignoreOrder: false
    });
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js|jsx$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    'sass-loader'
                ],
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_API_ID': JSON.stringify(process.env.FIREBASE_API_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
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
