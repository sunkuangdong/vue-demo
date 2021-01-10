const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" })
    ]
}