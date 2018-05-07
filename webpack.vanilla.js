const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
    entry: './src/vanilla/bootstrap.js',
    output:{
        path: `${__dirname}/docs/bundled/vanilla`
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html',
            template: './src/vanilla/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'./src/vanilla/*.css', to:'.', flatten:true }
        ])
    ]
});

