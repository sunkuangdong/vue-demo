const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", 'css-loader', "less-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    },
                ]
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: '[id].css',
        })
    ],
}