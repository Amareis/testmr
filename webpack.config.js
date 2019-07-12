const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    target: 'web',

    entry: {
        main: [
            '@babel/polyfill',
            'react-hot-loader/patch',
            './src/index.ts'
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname),
            'node_modules',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,

                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
        }),
    ],
}
