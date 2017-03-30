const webpack = require('webpack');

module.exports = {
    entry: __dirname+'/src/App.js',
    output:{
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            test: /\.hbs$/,
            loader: 'handlebars-loader?helperDirs[]='+__dirname+'/src/util/handlebars-helpers'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_moduels/,
            query:{
                presets: ['es2015', 'es2016']
            }
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            warnings: false
        })
    ],
    devServer:{
        inline: true,
        port: 3000,
        contentBase: __dirname,
        historyApiFallback: true
    }
}