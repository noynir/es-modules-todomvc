const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
    entry: './src/withlodash/bootstrap.js',
    output:{
        path: `${__dirname}/app/bundled/withlodash`
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            filename: 'index.html',
            template: './src/withlodash/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'./src/withlodash/*.css', to:'.', flatten:true }
        ])
    ]
});

