
module.exports = {
    entry: './src/bootstrap.js',
    mode:'development',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/app/bundled`,
    },
    module: {
        rules:[
            {
                test: /\.js/,
                exclude: [/modules/],
                loader: 'babel-loader?presets[]=es2015',
            }
        ]
    }
};
