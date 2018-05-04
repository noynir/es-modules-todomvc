const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
    entry: './src/lazy/bootstrap.js',
    output:{
        path: `${__dirname}/app/bundled/lazy`
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html',
            template: './src/lazy/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'./src/lazy/*.css', to:'.', flatten:true }
        ])
    ]
});

