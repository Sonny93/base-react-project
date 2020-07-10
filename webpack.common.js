const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        `${__dirname}/assets/App.js`
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css']
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
                extensions: ['.jsx', 'js']
            },
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }]
    }
};