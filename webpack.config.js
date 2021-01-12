const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
}