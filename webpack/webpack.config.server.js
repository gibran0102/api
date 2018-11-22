const webpack = require('webpack')
const path = require('path');

module.exports = {
    mode: 'development',
    entry:  path.resolve(__dirname, '../main.js'),
    output: {
        path: path.resolve(__dirname, '../built/'),
        filename: "server.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve:{
        modules: [
            "node_modules",
            path.resolve(__dirname, '../')
        ],
        extensions: [".js", ".json", ".jsx",],
    },

    target: "node"
}