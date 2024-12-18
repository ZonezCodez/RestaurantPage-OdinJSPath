# RestaurantPage-OdinJSPath
The Odin project JS Path Restaurant Page made with webpack to learn webpack!

Webpack Install Commands Order and what they did
npm init -y - Initiate the project package.json that will tell all the dependencies for development and more.
npm install --save-dev webpack webpack-cli - Initial instillation after init the package.json
npm install --save-dev html-webpack-plugin - HTML plugin to generate an html page.
code webpack.config.js - create the webpack config file needed use the config file commands below
npm install --save-dev style-loader css-loader - install css loader 
npm install --save-dev webpack-dev-server - Webpack dev server!

/////////Config File Copy and paste////////////

// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};