const base = require("./webpack.config.base.js")
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
    },
    ...base
}