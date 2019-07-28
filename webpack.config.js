const webpack = require('webpack');
const path = require('path');

module.exports = {    
    mode: 'development',
    entry: {
        App: "./app/assets/scripts/app.js",
        Vendor: "./app/assets/scripts/vendor.js"       
    },
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    }
}