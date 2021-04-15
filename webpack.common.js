const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        `${__dirname}/client/src/App.jsx`
    ],
    output: {
        path: `${__dirname}/client/dist`,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [ '.jsx', '.js', '.css' ]
    },
    plugins: [ new CleanWebpackPlugin() ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: [ '.jsx', 'js' ]
            },
            use: {
                loader:'babel-loader'
            }
        }, {
            test: /\.css$/i,
            use: [ 'style-loader', 'css-loader' ],
        }, {
            test: /\.svg$/,
            use: [ '@svgr/webpack' ],
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader',
            }]
        }]
    }
};
