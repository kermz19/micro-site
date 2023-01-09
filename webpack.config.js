const path = require("path");
// const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", {targets: "defaults"}], ["@babel/preset-react", {runtime: "automatic"}]]}
                },
                
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx"]},
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        static: { 
            directory: path.join(__dirname, "public/"),
            publicPath: "http://localhost:3000/dist/",
        },
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [new HtmlWebpackPlugin( {
        template: "./src/index.html"
    }
    )]
}